/**
 * 儿童发育行为评估量表计分算法
 * 基于 WS/T 580—2017 第4.4节
 */

/**
 * 计算实际月龄（精确到0.1月）
 * @param {string} birthDate - 出生日期 "YYYY-MM-DD"
 * @param {string} [refDate] - 参考日期，默认今天
 */
function getAgeMonths(birthDate, refDate) {
  const birth = new Date(birthDate);
  const ref = refDate ? new Date(refDate) : new Date();
  const ms = ref - birth;
  return parseFloat((ms / (1000 * 60 * 60 * 24 * 30.4375)).toFixed(1));
}

/**
 * 判断某能区某月龄组的所有项目是否全部通过
 */
function isGroupAllPass(domainCode, groupId, assessments) {
  const items = SCALE_ITEMS.filter(
    item => item.domain === domainCode && item.groupId === groupId
  );
  return items.length > 0 && items.every(
    item => assessments[item.id] && assessments[item.id].status === 'pass'
  );
}

/**
 * 计算某能区的智龄（月龄分）
 * 规则：
 *   1. 找最后一个"连续两个月龄组均全部通过"的位置（基线）
 *   2. 基线（含）之前的组全部计满分
 *   3. 基线之后的组逐项计分
 * @param {string} domainCode
 * @param {object} assessments - { itemId: { status, date } }
 * @returns {number} 智龄分（等同月龄数）
 */
function calcDomainAge(domainCode, assessments) {
  // 该能区有项目的月龄组，按月龄升序
  const groups = AGE_GROUPS.filter(g =>
    SCALE_ITEMS.some(item => item.domain === domainCode && item.groupId === g.groupId)
  );

  // 找基线：最后一个"连续两组均全通过"的位置
  let baselineIndex = -1;
  for (let i = 1; i < groups.length; i++) {
    if (
      isGroupAllPass(domainCode, groups[i - 1].groupId, assessments) &&
      isGroupAllPass(domainCode, groups[i].groupId, assessments)
    ) {
      baselineIndex = i;
    }
  }

  let totalScore = 0;

  if (baselineIndex >= 0) {
    // 基线及之前：全部满分
    for (let i = 0; i <= baselineIndex; i++) {
      totalScore += groups[i].scorePerGroup;
    }
    // 基线之后：逐项计分
    for (let i = baselineIndex + 1; i < groups.length; i++) {
      const items = SCALE_ITEMS.filter(
        item => item.domain === domainCode && item.groupId === groups[i].groupId
      );
      for (const item of items) {
        if (assessments[item.id] && assessments[item.id].status === 'pass') {
          totalScore += item.score;
        }
      }
    }
  } else {
    // 无基线：全部逐项计分
    for (const g of groups) {
      const items = SCALE_ITEMS.filter(
        item => item.domain === domainCode && item.groupId === g.groupId
      );
      for (const item of items) {
        if (assessments[item.id] && assessments[item.id].status === 'pass') {
          totalScore += item.score;
        }
      }
    }
  }

  return totalScore;
}

/**
 * DQ 等级判断
 */
function getDQLevel(dq) {
  if (dq === null || dq === undefined) return { level: '数据不足', color: '#9ca3af', bg: '#f3f4f6' };
  if (dq > 130)  return { level: '优秀',        color: '#059669', bg: '#d1fae5' };
  if (dq >= 110) return { level: '良好',         color: '#2563eb', bg: '#dbeafe' };
  if (dq >= 80)  return { level: '中等',         color: '#4b5563', bg: '#f3f4f6' };
  if (dq >= 70)  return { level: '临界偏低',     color: '#d97706', bg: '#fef3c7' };
  return                { level: '智力发育障碍', color: '#dc2626', bg: '#fee2e2' };
}

/**
 * 计算完整评估结果
 * @param {object} childData - 孩子完整数据（含 birthDate、assessments）
 * @returns {object} 评估结果
 */
function calcAssessmentResult(childData) {
  const actualAgeMonths = getAgeMonths(childData.birthDate);
  const assessments = childData.assessments || {};

  let totalDomainAge = 0;
  const domainResults = {};

  for (const domain of DOMAINS) {
    const domainAge = calcDomainAge(domain.code, assessments);
    const dq = actualAgeMonths > 0
      ? parseFloat(((domainAge / actualAgeMonths) * 100).toFixed(1))
      : null;
    domainResults[domain.code] = {
      name: domain.name,
      domainAge: parseFloat(domainAge.toFixed(1)),
      dq,
      level: getDQLevel(dq),
    };
    totalDomainAge += domainAge;
  }

  const totalDevelopmentalAge = parseFloat((totalDomainAge / 5).toFixed(1));
  const totalDQ = actualAgeMonths > 0
    ? parseFloat(((totalDevelopmentalAge / actualAgeMonths) * 100).toFixed(1))
    : null;

  // 通过项目数统计
  const passCount = Object.values(assessments).filter(a => a.status === 'pass').length;
  const totalItems = SCALE_ITEMS.length;

  return {
    assessmentDate: new Date().toISOString().split('T')[0],
    actualAgeMonths,
    domains: domainResults,
    totalDevelopmentalAge,
    totalDQ,
    totalLevel: getDQLevel(totalDQ),
    passCount,
    totalItems,
  };
}

/**
 * 格式化月龄为"X岁X个月"
 */
function formatAge(months) {
  if (months < 0) return '—';
  const years = Math.floor(months / 12);
  const m = Math.round(months % 12);
  if (years === 0) return `${m}个月`;
  if (m === 0) return `${years}岁`;
  return `${years}岁${m}个月`;
}

/**
 * 获取某月龄对应的月龄组（用于快速录入建议）
 * 返回小于等于该月龄的最大月龄组
 */
function getGroupByAge(ageMonths) {
  let result = null;
  for (const g of AGE_GROUPS) {
    if (g.ageMonths <= ageMonths) result = g;
    else break;
  }
  return result;
}
