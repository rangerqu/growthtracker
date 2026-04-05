/**
 * 0岁～6岁儿童发育行为评估量表数据
 * 基于 WS/T 580—2017
 */

// 月龄组配置（28组）
const AGE_GROUPS = [
  { groupId: '01', ageMonths: 1,  scorePerGroup: 1.0, label: '1月龄' },
  { groupId: '02', ageMonths: 2,  scorePerGroup: 1.0, label: '2月龄' },
  { groupId: '03', ageMonths: 3,  scorePerGroup: 1.0, label: '3月龄' },
  { groupId: '04', ageMonths: 4,  scorePerGroup: 1.0, label: '4月龄' },
  { groupId: '05', ageMonths: 5,  scorePerGroup: 1.0, label: '5月龄' },
  { groupId: '06', ageMonths: 6,  scorePerGroup: 1.0, label: '6月龄' },
  { groupId: '07', ageMonths: 7,  scorePerGroup: 1.0, label: '7月龄' },
  { groupId: '08', ageMonths: 8,  scorePerGroup: 1.0, label: '8月龄' },
  { groupId: '09', ageMonths: 9,  scorePerGroup: 1.0, label: '9月龄' },
  { groupId: '10', ageMonths: 10, scorePerGroup: 1.0, label: '10月龄' },
  { groupId: '11', ageMonths: 11, scorePerGroup: 1.0, label: '11月龄' },
  { groupId: '12', ageMonths: 12, scorePerGroup: 1.0, label: '12月龄' },
  { groupId: '13', ageMonths: 15, scorePerGroup: 3.0, label: '15月龄' },
  { groupId: '14', ageMonths: 18, scorePerGroup: 3.0, label: '18月龄' },
  { groupId: '15', ageMonths: 21, scorePerGroup: 3.0, label: '21月龄' },
  { groupId: '16', ageMonths: 24, scorePerGroup: 3.0, label: '24月龄' },
  { groupId: '17', ageMonths: 27, scorePerGroup: 3.0, label: '27月龄' },
  { groupId: '18', ageMonths: 30, scorePerGroup: 3.0, label: '30月龄' },
  { groupId: '19', ageMonths: 33, scorePerGroup: 3.0, label: '33月龄' },
  { groupId: '20', ageMonths: 36, scorePerGroup: 3.0, label: '36月龄' },
  { groupId: '21', ageMonths: 42, scorePerGroup: 6.0, label: '42月龄' },
  { groupId: '22', ageMonths: 48, scorePerGroup: 6.0, label: '48月龄' },
  { groupId: '23', ageMonths: 54, scorePerGroup: 6.0, label: '54月龄' },
  { groupId: '24', ageMonths: 60, scorePerGroup: 6.0, label: '60月龄' },
  { groupId: '25', ageMonths: 66, scorePerGroup: 6.0, label: '66月龄' },
  { groupId: '26', ageMonths: 72, scorePerGroup: 6.0, label: '72月龄' },
  { groupId: '27', ageMonths: 78, scorePerGroup: 6.0, label: '78月龄' },
  { groupId: '28', ageMonths: 84, scorePerGroup: 6.0, label: '84月龄' },
];

// 五个能区
const DOMAINS = [
  { code: 'GM', name: '大运动' },
  { code: 'FM', name: '精细动作' },
  { code: 'AD', name: '适应能力' },
  { code: 'LA', name: '语言' },
  { code: 'SB', name: '社会行为' },
];

/**
 * 测查项目（共261项）
 * note: "" = 无标注, "R" = 可询问家长, "*" = 未通过需注意
 * score = scorePerGroup / totalItems（该能区该月龄组的项目总数）
 */
const SCALE_ITEMS = [
  // ═══════════════════════════════════════
  // 1月龄（scorePerGroup=1.0，各域2项=0.5分）
  // ═══════════════════════════════════════
  { id: 'GM_01_1', domain: 'GM', groupId: '01', ageMonths: 1, score: 0.5, description: '抬肩坐起头竖直片刻', note: '' },
  { id: 'GM_01_2', domain: 'GM', groupId: '01', ageMonths: 1, score: 0.5, description: '俯卧头部翘动', note: '' },
  { id: 'FM_01_1', domain: 'FM', groupId: '01', ageMonths: 1, score: 0.5, description: '触碰手掌紧握拳', note: '' },
  { id: 'FM_01_2', domain: 'FM', groupId: '01', ageMonths: 1, score: 0.5, description: '手的自然状态', note: '' },
  { id: 'AD_01_1', domain: 'AD', groupId: '01', ageMonths: 1, score: 0.5, description: '看黑白靶', note: '*' },
  { id: 'AD_01_2', domain: 'AD', groupId: '01', ageMonths: 1, score: 0.5, description: '眼跟红球过中线', note: '' },
  { id: 'LA_01_1', domain: 'LA', groupId: '01', ageMonths: 1, score: 0.5, description: '自发细小喉音', note: 'R' },
  { id: 'LA_01_2', domain: 'LA', groupId: '01', ageMonths: 1, score: 0.5, description: '听声音有反应', note: '*' },
  { id: 'SB_01_1', domain: 'SB', groupId: '01', ageMonths: 1, score: 0.5, description: '对发声的人有注视', note: '' },
  { id: 'SB_01_2', domain: 'SB', groupId: '01', ageMonths: 1, score: 0.5, description: '眼跟踪走动的人', note: '' },

  // ═══════════════════════════════════════
  // 2月龄（scorePerGroup=1.0，各域2项=0.5分）
  // ═══════════════════════════════════════
  { id: 'GM_02_1', domain: 'GM', groupId: '02', ageMonths: 2, score: 0.5, description: '拉腕坐起头竖直短时', note: '' },
  { id: 'GM_02_2', domain: 'GM', groupId: '02', ageMonths: 2, score: 0.5, description: '俯卧头抬离床面', note: '' },
  { id: 'FM_02_1', domain: 'FM', groupId: '02', ageMonths: 2, score: 0.5, description: '花铃棒留握片刻', note: '' },
  { id: 'FM_02_2', domain: 'FM', groupId: '02', ageMonths: 2, score: 0.5, description: '拇指轻叩可分开', note: '*' },
  { id: 'AD_02_1', domain: 'AD', groupId: '02', ageMonths: 2, score: 0.5, description: '即刻注意大玩具', note: '' },
  { id: 'AD_02_2', domain: 'AD', groupId: '02', ageMonths: 2, score: 0.5, description: '眼跟红球上下移动', note: '*' },
  { id: 'LA_02_1', domain: 'LA', groupId: '02', ageMonths: 2, score: 0.5, description: '发a、o、e等母音', note: 'R' },
  { id: 'LA_02_2', domain: 'LA', groupId: '02', ageMonths: 2, score: 0.5, description: '听声音有复杂反应', note: '' },
  { id: 'SB_02_1', domain: 'SB', groupId: '02', ageMonths: 2, score: 0.5, description: '自发微笑', note: 'R' },
  { id: 'SB_02_2', domain: 'SB', groupId: '02', ageMonths: 2, score: 0.5, description: '逗引时有反应', note: '' },

  // ═══════════════════════════════════════
  // 3月龄（scorePerGroup=1.0；LA只有1项=1.0，其余2项=0.5）
  // ═══════════════════════════════════════
  { id: 'GM_03_1', domain: 'GM', groupId: '03', ageMonths: 3, score: 0.5, description: '抱直头稳', note: '' },
  { id: 'GM_03_2', domain: 'GM', groupId: '03', ageMonths: 3, score: 0.5, description: '俯卧抬头45°', note: '' },
  { id: 'FM_03_1', domain: 'FM', groupId: '03', ageMonths: 3, score: 0.5, description: '花铃棒留握30s', note: '' },
  { id: 'FM_03_2', domain: 'FM', groupId: '03', ageMonths: 3, score: 0.5, description: '两手搭在一起', note: '' },
  { id: 'AD_03_1', domain: 'AD', groupId: '03', ageMonths: 3, score: 0.5, description: '即刻注意胸前玩具', note: '' },
  { id: 'AD_03_2', domain: 'AD', groupId: '03', ageMonths: 3, score: 0.5, description: '眼跟红球180°', note: '' },
  { id: 'LA_03_1', domain: 'LA', groupId: '03', ageMonths: 3, score: 1.0, description: '笑出声', note: 'R' },
  { id: 'SB_03_1', domain: 'SB', groupId: '03', ageMonths: 3, score: 0.5, description: '见人会笑', note: '' },
  { id: 'SB_03_2', domain: 'SB', groupId: '03', ageMonths: 3, score: 0.5, description: '灵敏模样', note: '' },

  // ═══════════════════════════════════════
  // 4月龄（scorePerGroup=1.0，各域2项=0.5分）
  // ═══════════════════════════════════════
  { id: 'GM_04_1', domain: 'GM', groupId: '04', ageMonths: 4, score: 0.5, description: '扶腋可站片刻', note: '' },
  { id: 'GM_04_2', domain: 'GM', groupId: '04', ageMonths: 4, score: 0.5, description: '俯卧抬头90°', note: '' },
  { id: 'FM_04_1', domain: 'FM', groupId: '04', ageMonths: 4, score: 0.5, description: '摇动并注视花铃棒', note: '' },
  { id: 'FM_04_2', domain: 'FM', groupId: '04', ageMonths: 4, score: 0.5, description: '试图抓物', note: '' },
  { id: 'AD_04_1', domain: 'AD', groupId: '04', ageMonths: 4, score: 0.5, description: '目光对视', note: '*' },
  { id: 'AD_04_2', domain: 'AD', groupId: '04', ageMonths: 4, score: 0.5, description: '高声叫', note: 'R' },
  { id: 'LA_04_1', domain: 'LA', groupId: '04', ageMonths: 4, score: 0.5, description: '伊语作声', note: 'R' },
  { id: 'LA_04_2', domain: 'LA', groupId: '04', ageMonths: 4, score: 0.5, description: '找到声源', note: '' },
  { id: 'SB_04_1', domain: 'SB', groupId: '04', ageMonths: 4, score: 0.5, description: '注视镜中人像', note: '' },
  { id: 'SB_04_2', domain: 'SB', groupId: '04', ageMonths: 4, score: 0.5, description: '认亲人', note: 'R' },

  // ═══════════════════════════════════════
  // 5月龄（scorePerGroup=1.0；LA只有1项=1.0，其余2项=0.5）
  // ═══════════════════════════════════════
  { id: 'GM_05_1', domain: 'GM', groupId: '05', ageMonths: 5, score: 0.5, description: '轻拉腕部即坐起', note: '' },
  { id: 'GM_05_2', domain: 'GM', groupId: '05', ageMonths: 5, score: 0.5, description: '独坐头身前倾', note: '' },
  { id: 'FM_05_1', domain: 'FM', groupId: '05', ageMonths: 5, score: 0.5, description: '抓住近处玩具', note: '' },
  { id: 'FM_05_2', domain: 'FM', groupId: '05', ageMonths: 5, score: 0.5, description: '玩手', note: '' },
  { id: 'AD_05_1', domain: 'AD', groupId: '05', ageMonths: 5, score: 0.5, description: '注意小丸', note: '' },
  { id: 'AD_05_2', domain: 'AD', groupId: '05', ageMonths: 5, score: 0.5, description: '拿住一积木注视另一积木', note: '' },
  { id: 'LA_05_1', domain: 'LA', groupId: '05', ageMonths: 5, score: 1.0, description: '对人及物发声', note: 'R' },
  { id: 'SB_05_1', domain: 'SB', groupId: '05', ageMonths: 5, score: 0.5, description: '对镜有游戏反应', note: '' },
  { id: 'SB_05_2', domain: 'SB', groupId: '05', ageMonths: 5, score: 0.5, description: '见食物兴奋', note: 'R' },

  // ═══════════════════════════════════════
  // 6月龄（scorePerGroup=1.0，各域2项=0.5分）
  // ═══════════════════════════════════════
  { id: 'GM_06_1', domain: 'GM', groupId: '06', ageMonths: 6, score: 0.5, description: '仰卧翻身', note: 'R' },
  { id: 'GM_06_2', domain: 'GM', groupId: '06', ageMonths: 6, score: 0.5, description: '会拍桌子', note: '' },
  { id: 'FM_06_1', domain: 'FM', groupId: '06', ageMonths: 6, score: 0.5, description: '会撕揉纸张', note: '' },
  { id: 'FM_06_2', domain: 'FM', groupId: '06', ageMonths: 6, score: 0.5, description: '耙弄到桌上一积木', note: '' },
  { id: 'AD_06_1', domain: 'AD', groupId: '06', ageMonths: 6, score: 0.5, description: '两手拿住积木', note: '' },
  { id: 'AD_06_2', domain: 'AD', groupId: '06', ageMonths: 6, score: 0.5, description: '寻找失落的玩具', note: '' },
  { id: 'LA_06_1', domain: 'LA', groupId: '06', ageMonths: 6, score: 0.5, description: '叫名字转头', note: '' },
  { id: 'LA_06_2', domain: 'LA', groupId: '06', ageMonths: 6, score: 0.5, description: '理解手势', note: '' },
  { id: 'SB_06_1', domain: 'SB', groupId: '06', ageMonths: 6, score: 0.5, description: '自喂食物', note: 'R' },
  { id: 'SB_06_2', domain: 'SB', groupId: '06', ageMonths: 6, score: 0.5, description: '会躲猫猫', note: '' },

  // ═══════════════════════════════════════
  // 7月龄（scorePerGroup=1.0；LA只有1项=1.0，SB 2项=0.5）
  // ═══════════════════════════════════════
  { id: 'GM_07_1', domain: 'GM', groupId: '07', ageMonths: 7, score: 0.5, description: '悬垂落地姿势', note: '*' },
  { id: 'GM_07_2', domain: 'GM', groupId: '07', ageMonths: 7, score: 0.5, description: '独坐直', note: '' },
  { id: 'FM_07_1', domain: 'FM', groupId: '07', ageMonths: 7, score: 0.5, description: '耙弄到小丸', note: '' },
  { id: 'FM_07_2', domain: 'FM', groupId: '07', ageMonths: 7, score: 0.5, description: '自取一积木，再取另一块', note: '' },
  { id: 'AD_07_1', domain: 'AD', groupId: '07', ageMonths: 7, score: 0.5, description: '积木换手', note: '' },
  { id: 'AD_07_2', domain: 'AD', groupId: '07', ageMonths: 7, score: 0.5, description: '伸手够远处玩具', note: '' },
  { id: 'LA_07_1', domain: 'LA', groupId: '07', ageMonths: 7, score: 1.0, description: '发da-da、ma-ma等无所指', note: 'R' },
  { id: 'SB_07_1', domain: 'SB', groupId: '07', ageMonths: 7, score: 0.5, description: '抱脚玩', note: '' },
  { id: 'SB_07_2', domain: 'SB', groupId: '07', ageMonths: 7, score: 0.5, description: '能认生人', note: 'R' },

  // ═══════════════════════════════════════
  // 8月龄（scorePerGroup=1.0；SB只有1项=1.0，其余2项=0.5）
  // ═══════════════════════════════════════
  { id: 'GM_08_1', domain: 'GM', groupId: '08', ageMonths: 8, score: 0.5, description: '双手扶物可站立', note: '' },
  { id: 'GM_08_2', domain: 'GM', groupId: '08', ageMonths: 8, score: 0.5, description: '独坐自如', note: '' },
  { id: 'FM_08_1', domain: 'FM', groupId: '08', ageMonths: 8, score: 0.5, description: '拇他指捏小丸', note: '' },
  { id: 'FM_08_2', domain: 'FM', groupId: '08', ageMonths: 8, score: 0.5, description: '试图取第三块积木', note: '' },
  { id: 'AD_08_1', domain: 'AD', groupId: '08', ageMonths: 8, score: 0.5, description: '有意识地摇铃', note: '' },
  { id: 'AD_08_2', domain: 'AD', groupId: '08', ageMonths: 8, score: 0.5, description: '持续用手追逐玩具', note: '' },
  { id: 'LA_08_1', domain: 'LA', groupId: '08', ageMonths: 8, score: 0.5, description: '模仿声音', note: 'R' },
  { id: 'LA_08_2', domain: 'LA', groupId: '08', ageMonths: 8, score: 0.5, description: '可用动作手势表达（2/3）', note: 'R' },
  { id: 'SB_08_1', domain: 'SB', groupId: '08', ageMonths: 8, score: 1.0, description: '懂得成人面部表情', note: '' },

  // ═══════════════════════════════════════
  // 9月龄（scorePerGroup=1.0；SB只有1项=1.0，其余2项=0.5）
  // ═══════════════════════════════════════
  { id: 'GM_09_1', domain: 'GM', groupId: '09', ageMonths: 9, score: 0.5, description: '拉双手会走', note: '' },
  { id: 'GM_09_2', domain: 'GM', groupId: '09', ageMonths: 9, score: 0.5, description: '会爬', note: '' },
  { id: 'FM_09_1', domain: 'FM', groupId: '09', ageMonths: 9, score: 0.5, description: '拇食指捏小丸', note: '' },
  { id: 'FM_09_2', domain: 'FM', groupId: '09', ageMonths: 9, score: 0.5, description: '从杯中取出积木', note: '' },
  { id: 'AD_09_1', domain: 'AD', groupId: '09', ageMonths: 9, score: 0.5, description: '积木对敲', note: '' },
  { id: 'AD_09_2', domain: 'AD', groupId: '09', ageMonths: 9, score: 0.5, description: '拨弄铃舌', note: '' },
  { id: 'LA_09_1', domain: 'LA', groupId: '09', ageMonths: 9, score: 0.5, description: '会欢迎', note: 'R' },
  { id: 'LA_09_2', domain: 'LA', groupId: '09', ageMonths: 9, score: 0.5, description: '会再见', note: 'R' },
  { id: 'SB_09_1', domain: 'SB', groupId: '09', ageMonths: 9, score: 1.0, description: '表示不要', note: 'R' },

  // ═══════════════════════════════════════
  // 10月龄（scorePerGroup=1.0；FM/LA各1项=1.0，其余2项=0.5）
  // ═══════════════════════════════════════
  { id: 'GM_10_1', domain: 'GM', groupId: '10', ageMonths: 10, score: 0.5, description: '保护性支撑', note: '*' },
  { id: 'GM_10_2', domain: 'GM', groupId: '10', ageMonths: 10, score: 0.5, description: '自己坐起', note: '' },
  { id: 'FM_10_1', domain: 'FM', groupId: '10', ageMonths: 10, score: 1.0, description: '拇食指动作熟练', note: '' },
  { id: 'AD_10_1', domain: 'AD', groupId: '10', ageMonths: 10, score: 0.5, description: '拿掉扣积木杯玩积木', note: '' },
  { id: 'AD_10_2', domain: 'AD', groupId: '10', ageMonths: 10, score: 0.5, description: '寻找盒内东西', note: '' },
  { id: 'LA_10_1', domain: 'LA', groupId: '10', ageMonths: 10, score: 1.0, description: '模仿发语声', note: 'R' },
  { id: 'SB_10_1', domain: 'SB', groupId: '10', ageMonths: 10, score: 0.5, description: '懂得常见物及人名称', note: '' },
  { id: 'SB_10_2', domain: 'SB', groupId: '10', ageMonths: 10, score: 0.5, description: '按指令取东西', note: '' },

  // ═══════════════════════════════════════
  // 11月龄（scorePerGroup=1.0；FM只有1项=1.0，其余2项=0.5）
  // ═══════════════════════════════════════
  { id: 'GM_11_1', domain: 'GM', groupId: '11', ageMonths: 11, score: 0.5, description: '独站片刻', note: '' },
  { id: 'GM_11_2', domain: 'GM', groupId: '11', ageMonths: 11, score: 0.5, description: '扶物下蹲取物', note: '' },
  { id: 'FM_11_1', domain: 'FM', groupId: '11', ageMonths: 11, score: 1.0, description: '积木放入杯中', note: '' },
  { id: 'AD_11_1', domain: 'AD', groupId: '11', ageMonths: 11, score: 0.5, description: '打开包积木的方巾', note: '' },
  { id: 'AD_11_2', domain: 'AD', groupId: '11', ageMonths: 11, score: 0.5, description: '模仿拍娃娃', note: '' },
  { id: 'LA_11_1', domain: 'LA', groupId: '11', ageMonths: 11, score: 0.5, description: '有意识地发一个字音', note: 'R' },
  { id: 'LA_11_2', domain: 'LA', groupId: '11', ageMonths: 11, score: 0.5, description: '懂得"不"', note: 'R' },
  { id: 'SB_11_1', domain: 'SB', groupId: '11', ageMonths: 11, score: 0.5, description: '会从杯中喝水', note: 'R' },
  { id: 'SB_11_2', domain: 'SB', groupId: '11', ageMonths: 11, score: 0.5, description: '会摘帽子', note: '' },

  // ═══════════════════════════════════════
  // 12月龄（scorePerGroup=1.0；AD只有1项=1.0，其余2项=0.5）
  // ═══════════════════════════════════════
  { id: 'GM_12_1', domain: 'GM', groupId: '12', ageMonths: 12, score: 0.5, description: '独站稳', note: '' },
  { id: 'GM_12_2', domain: 'GM', groupId: '12', ageMonths: 12, score: 0.5, description: '牵一手可走', note: '' },
  { id: 'FM_12_1', domain: 'FM', groupId: '12', ageMonths: 12, score: 0.5, description: '全掌握笔留笔道', note: '' },
  { id: 'FM_12_2', domain: 'FM', groupId: '12', ageMonths: 12, score: 0.5, description: '试把小丸投小瓶', note: '' },
  { id: 'AD_12_1', domain: 'AD', groupId: '12', ageMonths: 12, score: 1.0, description: '盖瓶盖', note: '' },
  { id: 'LA_12_1', domain: 'LA', groupId: '12', ageMonths: 12, score: 0.5, description: '叫爸爸妈妈有所指', note: 'R' },
  { id: 'LA_12_2', domain: 'LA', groupId: '12', ageMonths: 12, score: 0.5, description: '向他/她要东西知道给', note: '' },
  { id: 'SB_12_1', domain: 'SB', groupId: '12', ageMonths: 12, score: 0.5, description: '穿衣知配合', note: 'R' },
  { id: 'SB_12_2', domain: 'SB', groupId: '12', ageMonths: 12, score: 0.5, description: '共同注意', note: 'R' },

  // ═══════════════════════════════════════
  // 15月龄（scorePerGroup=3.0；GM/SB各1项=3.0，其余2项=1.5）
  // ═══════════════════════════════════════
  { id: 'GM_13_1', domain: 'GM', groupId: '13', ageMonths: 15, score: 3.0, description: '独走自如', note: '' },
  { id: 'FM_13_1', domain: 'FM', groupId: '13', ageMonths: 15, score: 1.5, description: '自发乱画', note: '' },
  { id: 'FM_13_2', domain: 'FM', groupId: '13', ageMonths: 15, score: 1.5, description: '从瓶中拿到小丸', note: '' },
  { id: 'AD_13_1', domain: 'AD', groupId: '13', ageMonths: 15, score: 1.5, description: '翻书两次', note: '' },
  { id: 'AD_13_2', domain: 'AD', groupId: '13', ageMonths: 15, score: 1.5, description: '盖上圆盒', note: '' },
  { id: 'LA_13_1', domain: 'LA', groupId: '13', ageMonths: 15, score: 1.5, description: '会指眼耳鼻口手', note: '' },
  { id: 'LA_13_2', domain: 'LA', groupId: '13', ageMonths: 15, score: 1.5, description: '说3～5个字', note: 'R' },
  { id: 'SB_13_1', domain: 'SB', groupId: '13', ageMonths: 15, score: 3.0, description: '会脱袜子', note: 'R' },

  // ═══════════════════════════════════════
  // 18月龄（scorePerGroup=3.0；GM/FM各1项=3.0，其余2项=1.5）
  // ═══════════════════════════════════════
  { id: 'GM_14_1', domain: 'GM', groupId: '14', ageMonths: 18, score: 3.0, description: '扔球无方向', note: '' },
  { id: 'FM_14_1', domain: 'FM', groupId: '14', ageMonths: 18, score: 3.0, description: '模仿画道道', note: '' },
  { id: 'AD_14_1', domain: 'AD', groupId: '14', ageMonths: 18, score: 1.5, description: '积木搭高四块', note: '' },
  { id: 'AD_14_2', domain: 'AD', groupId: '14', ageMonths: 18, score: 1.5, description: '正放圆积木入型板', note: '' },
  { id: 'LA_14_1', domain: 'LA', groupId: '14', ageMonths: 18, score: 1.5, description: '懂得三个投向', note: '' },
  { id: 'LA_14_2', domain: 'LA', groupId: '14', ageMonths: 18, score: 1.5, description: '说十个字词', note: 'R' },
  { id: 'SB_14_1', domain: 'SB', groupId: '14', ageMonths: 18, score: 1.5, description: '白天能控制大小便', note: 'R' },
  { id: 'SB_14_2', domain: 'SB', groupId: '14', ageMonths: 18, score: 1.5, description: '会用匙', note: 'R' },

  // ═══════════════════════════════════════
  // 21月龄（scorePerGroup=3.0，各域2项=1.5）
  // ═══════════════════════════════════════
  { id: 'GM_15_1', domain: 'GM', groupId: '15', ageMonths: 21, score: 1.5, description: '脚尖走', note: 'R' },
  { id: 'GM_15_2', domain: 'GM', groupId: '15', ageMonths: 21, score: 1.5, description: '扶楼梯上楼', note: '' },
  { id: 'FM_15_1', domain: 'FM', groupId: '15', ageMonths: 21, score: 1.5, description: '水晶线穿扣眼', note: '' },
  { id: 'FM_15_2', domain: 'FM', groupId: '15', ageMonths: 21, score: 1.5, description: '模仿拉拉锁', note: '' },
  { id: 'AD_15_1', domain: 'AD', groupId: '15', ageMonths: 21, score: 1.5, description: '积木搭高7～8块', note: '' },
  { id: 'AD_15_2', domain: 'AD', groupId: '15', ageMonths: 21, score: 1.5, description: '知道红色', note: '' },
  { id: 'LA_15_1', domain: 'LA', groupId: '15', ageMonths: 21, score: 1.5, description: '回答简单问题', note: '' },
  { id: 'LA_15_2', domain: 'LA', groupId: '15', ageMonths: 21, score: 1.5, description: '说3～5个字的句子', note: 'R' },
  { id: 'SB_15_1', domain: 'SB', groupId: '15', ageMonths: 21, score: 1.5, description: '能表示个人需要', note: 'R' },
  { id: 'SB_15_2', domain: 'SB', groupId: '15', ageMonths: 21, score: 1.5, description: '想象性游戏', note: 'R' },

  // ═══════════════════════════════════════
  // 24月龄（scorePerGroup=3.0；GM/FM各1项=3.0，其余2项=1.5）
  // ═══════════════════════════════════════
  { id: 'GM_16_1', domain: 'GM', groupId: '16', ageMonths: 24, score: 3.0, description: '双足跳离地面', note: '' },
  { id: 'FM_16_1', domain: 'FM', groupId: '16', ageMonths: 24, score: 3.0, description: '穿过扣眼后拉线', note: '' },
  { id: 'AD_16_1', domain: 'AD', groupId: '16', ageMonths: 24, score: 1.5, description: '一页页翻书', note: '' },
  { id: 'AD_16_2', domain: 'AD', groupId: '16', ageMonths: 24, score: 1.5, description: '倒放圆积木入型板', note: '' },
  { id: 'LA_16_1', domain: 'LA', groupId: '16', ageMonths: 24, score: 1.5, description: '说两句以上诗或儿歌', note: '' },
  { id: 'LA_16_2', domain: 'LA', groupId: '16', ageMonths: 24, score: 1.5, description: '说常见物用途（碗笔凳球）', note: '' },
  { id: 'SB_16_1', domain: 'SB', groupId: '16', ageMonths: 24, score: 1.5, description: '会打招呼', note: '' },
  { id: 'SB_16_2', domain: 'SB', groupId: '16', ageMonths: 24, score: 1.5, description: '问"这是什么？"', note: 'R' },

  // ═══════════════════════════════════════
  // 27月龄（scorePerGroup=3.0，各域2项=1.5）
  // ═══════════════════════════════════════
  { id: 'GM_17_1', domain: 'GM', groupId: '17', ageMonths: 27, score: 1.5, description: '独自上楼', note: '' },
  { id: 'GM_17_2', domain: 'GM', groupId: '17', ageMonths: 27, score: 1.5, description: '独自下楼', note: '' },
  { id: 'FM_17_1', domain: 'FM', groupId: '17', ageMonths: 27, score: 1.5, description: '模仿画竖道', note: '' },
  { id: 'FM_17_2', domain: 'FM', groupId: '17', ageMonths: 27, score: 1.5, description: '对拉锁', note: '' },
  { id: 'AD_17_1', domain: 'AD', groupId: '17', ageMonths: 27, score: 1.5, description: '认识大小', note: '' },
  { id: 'AD_17_2', domain: 'AD', groupId: '17', ageMonths: 27, score: 1.5, description: '正放型板', note: '' },
  { id: 'LA_17_1', domain: 'LA', groupId: '17', ageMonths: 27, score: 1.5, description: '说7～10个字的句子', note: '' },
  { id: 'LA_17_2', domain: 'LA', groupId: '17', ageMonths: 27, score: 1.5, description: '理解指令', note: '' },
  { id: 'SB_17_1', domain: 'SB', groupId: '17', ageMonths: 27, score: 1.5, description: '脱单衣或裤', note: 'R' },
  { id: 'SB_17_2', domain: 'SB', groupId: '17', ageMonths: 27, score: 1.5, description: '开始有是非观念', note: '' },

  // ═══════════════════════════════════════
  // 30月龄（scorePerGroup=3.0；GM只有1项=3.0，其余2项=1.5）
  // ═══════════════════════════════════════
  { id: 'GM_18_1', domain: 'GM', groupId: '18', ageMonths: 30, score: 3.0, description: '独脚站2s', note: '' },
  { id: 'FM_18_1', domain: 'FM', groupId: '18', ageMonths: 30, score: 1.5, description: '穿扣子3～5个', note: '' },
  { id: 'FM_18_2', domain: 'FM', groupId: '18', ageMonths: 30, score: 1.5, description: '模仿搭桥', note: '' },
  { id: 'AD_18_1', domain: 'AD', groupId: '18', ageMonths: 30, score: 1.5, description: '知道1与许多', note: '' },
  { id: 'AD_18_2', domain: 'AD', groupId: '18', ageMonths: 30, score: 1.5, description: '倒放型板', note: '' },
  { id: 'LA_18_1', domain: 'LA', groupId: '18', ageMonths: 30, score: 1.5, description: '说出图片10样', note: '' },
  { id: 'LA_18_2', domain: 'LA', groupId: '18', ageMonths: 30, score: 1.5, description: '说自己名字', note: '' },
  { id: 'SB_18_1', domain: 'SB', groupId: '18', ageMonths: 30, score: 1.5, description: '来回倒水不洒', note: '' },
  { id: 'SB_18_2', domain: 'SB', groupId: '18', ageMonths: 30, score: 1.5, description: '女孩扔果皮（懂得不乱扔垃圾）', note: '' },

  // ═══════════════════════════════════════
  // 33月龄（scorePerGroup=3.0；GM只有1项=3.0，其余2项=1.5）
  // ═══════════════════════════════════════
  { id: 'GM_19_1', domain: 'GM', groupId: '19', ageMonths: 33, score: 3.0, description: '立定跳远', note: '' },
  { id: 'FM_19_1', domain: 'FM', groupId: '19', ageMonths: 33, score: 1.5, description: '模仿画圆', note: '' },
  { id: 'FM_19_2', domain: 'FM', groupId: '19', ageMonths: 33, score: 1.5, description: '拉拉锁', note: '' },
  { id: 'AD_19_1', domain: 'AD', groupId: '19', ageMonths: 33, score: 1.5, description: '积木搭高10块', note: '' },
  { id: 'AD_19_2', domain: 'AD', groupId: '19', ageMonths: 33, score: 1.5, description: '连续执行三个命令', note: '' },
  { id: 'LA_19_1', domain: 'LA', groupId: '19', ageMonths: 33, score: 1.5, description: '说出性别', note: '' },
  { id: 'LA_19_2', domain: 'LA', groupId: '19', ageMonths: 33, score: 1.5, description: '分清"里""外"', note: '' },
  { id: 'SB_19_1', domain: 'SB', groupId: '19', ageMonths: 33, score: 1.5, description: '会穿鞋', note: '' },
  { id: 'SB_19_2', domain: 'SB', groupId: '19', ageMonths: 33, score: 1.5, description: '解扣子', note: '' },

  // ═══════════════════════════════════════
  // 36月龄（scorePerGroup=3.0；GM只有1项=3.0，其余2项=1.5）
  // ═══════════════════════════════════════
  { id: 'GM_20_1', domain: 'GM', groupId: '20', ageMonths: 36, score: 3.0, description: '双脚交替跳', note: '' },
  { id: 'FM_20_1', domain: 'FM', groupId: '20', ageMonths: 36, score: 1.5, description: '模仿画交叉线', note: '' },
  { id: 'FM_20_2', domain: 'FM', groupId: '20', ageMonths: 36, score: 1.5, description: '会拧螺丝', note: '' },
  { id: 'AD_20_1', domain: 'AD', groupId: '20', ageMonths: 36, score: 1.5, description: '懂得"3"', note: '' },
  { id: 'AD_20_2', domain: 'AD', groupId: '20', ageMonths: 36, score: 1.5, description: '认识两种颜色', note: '' },
  { id: 'LA_20_1', domain: 'LA', groupId: '20', ageMonths: 36, score: 1.5, description: '说出图片14样', note: '' },
  { id: 'LA_20_2', domain: 'LA', groupId: '20', ageMonths: 36, score: 1.5, description: '发音基本清楚', note: '' },
  { id: 'SB_20_1', domain: 'SB', groupId: '20', ageMonths: 36, score: 1.5, description: '懂得"饿了、冷了、累了"', note: '' },
  { id: 'SB_20_2', domain: 'SB', groupId: '20', ageMonths: 36, score: 1.5, description: '扣扣子', note: '' },

  // ═══════════════════════════════════════
  // 42月龄（scorePerGroup=6.0，各域2项=3.0）
  // ═══════════════════════════════════════
  { id: 'GM_21_1', domain: 'GM', groupId: '21', ageMonths: 42, score: 3.0, description: '交替上楼', note: '' },
  { id: 'GM_21_2', domain: 'GM', groupId: '21', ageMonths: 42, score: 3.0, description: '并足从楼梯末级跳下', note: '' },
  { id: 'FM_21_1', domain: 'FM', groupId: '21', ageMonths: 42, score: 3.0, description: '拼圆形、正方形', note: '' },
  { id: 'FM_21_2', domain: 'FM', groupId: '21', ageMonths: 42, score: 3.0, description: '会用剪刀', note: '' },
  { id: 'AD_21_1', domain: 'AD', groupId: '21', ageMonths: 42, score: 3.0, description: '懂得"5"', note: '' },
  { id: 'AD_21_2', domain: 'AD', groupId: '21', ageMonths: 42, score: 3.0, description: '认识四种颜色', note: '' },
  { id: 'LA_21_1', domain: 'LA', groupId: '21', ageMonths: 42, score: 3.0, description: '会说反义词', note: '' },
  { id: 'LA_21_2', domain: 'LA', groupId: '21', ageMonths: 42, score: 3.0, description: '说出图形（△○□）', note: '' },
  { id: 'SB_21_1', domain: 'SB', groupId: '21', ageMonths: 42, score: 3.0, description: '会穿上衣', note: 'R' },
  { id: 'SB_21_2', domain: 'SB', groupId: '21', ageMonths: 42, score: 3.0, description: '吃饭之前为什么要洗手？', note: '' },

  // ═══════════════════════════════════════
  // 48月龄（scorePerGroup=6.0，各域2项=3.0）
  // ═══════════════════════════════════════
  { id: 'GM_22_1', domain: 'GM', groupId: '22', ageMonths: 48, score: 3.0, description: '独脚站5s', note: '' },
  { id: 'GM_22_2', domain: 'GM', groupId: '22', ageMonths: 48, score: 3.0, description: '并足从楼梯末级跳下稳', note: '' },
  { id: 'FM_22_1', domain: 'FM', groupId: '22', ageMonths: 48, score: 3.0, description: '模仿画方形', note: '' },
  { id: 'FM_22_2', domain: 'FM', groupId: '22', ageMonths: 48, score: 3.0, description: '照图组装螺丝', note: '' },
  { id: 'AD_22_1', domain: 'AD', groupId: '22', ageMonths: 48, score: 3.0, description: '找不同（3个）', note: '' },
  { id: 'AD_22_2', domain: 'AD', groupId: '22', ageMonths: 48, score: 3.0, description: '图画补缺（3/6）', note: '' },
  { id: 'LA_22_1', domain: 'LA', groupId: '22', ageMonths: 48, score: 3.0, description: '模仿说复合句', note: '' },
  { id: 'LA_22_2', domain: 'LA', groupId: '22', ageMonths: 48, score: 3.0, description: '锅、手机、眼睛的用途', note: '' },
  { id: 'SB_22_1', domain: 'SB', groupId: '22', ageMonths: 48, score: 3.0, description: '会做集体游戏', note: 'R' },
  { id: 'SB_22_2', domain: 'SB', groupId: '22', ageMonths: 48, score: 3.0, description: '分辨男女厕所', note: '' },

  // ═══════════════════════════════════════
  // 54月龄（scorePerGroup=6.0，各域2项=3.0）
  // ═══════════════════════════════════════
  { id: 'GM_23_1', domain: 'GM', groupId: '23', ageMonths: 54, score: 3.0, description: '独脚站10s', note: '' },
  { id: 'GM_23_2', domain: 'GM', groupId: '23', ageMonths: 54, score: 3.0, description: '足尖对足跟向前走2m', note: '' },
  { id: 'FM_23_1', domain: 'FM', groupId: '23', ageMonths: 54, score: 3.0, description: '折纸边角整齐', note: '' },
  { id: 'FM_23_2', domain: 'FM', groupId: '23', ageMonths: 54, score: 3.0, description: '筷子夹花生米', note: '' },
  { id: 'AD_23_1', domain: 'AD', groupId: '23', ageMonths: 54, score: 3.0, description: '类同', note: '' },
  { id: 'AD_23_2', domain: 'AD', groupId: '23', ageMonths: 54, score: 3.0, description: '图画补缺（4/6）', note: '' },
  { id: 'LA_23_1', domain: 'LA', groupId: '23', ageMonths: 54, score: 3.0, description: '会漱口', note: '' },
  { id: 'LA_23_2', domain: 'LA', groupId: '23', ageMonths: 54, score: 3.0, description: '会认识数字', note: '' },
  { id: 'SB_23_1', domain: 'SB', groupId: '23', ageMonths: 54, score: 3.0, description: '懂得上午、下午', note: '' },
  { id: 'SB_23_2', domain: 'SB', groupId: '23', ageMonths: 54, score: 3.0, description: '数手指', note: '' },

  // ═══════════════════════════════════════
  // 60月龄（scorePerGroup=6.0；SB只有1项=6.0，其余2项=3.0）
  // ═══════════════════════════════════════
  { id: 'GM_24_1', domain: 'GM', groupId: '24', ageMonths: 60, score: 3.0, description: '单脚跳', note: '' },
  { id: 'GM_24_2', domain: 'GM', groupId: '24', ageMonths: 60, score: 3.0, description: '踩踏板', note: '' },
  { id: 'FM_24_1', domain: 'FM', groupId: '24', ageMonths: 60, score: 3.0, description: '照图拼椭圆形', note: '' },
  { id: 'FM_24_2', domain: 'FM', groupId: '24', ageMonths: 60, score: 3.0, description: '试剪圆形', note: '' },
  { id: 'AD_24_1', domain: 'AD', groupId: '24', ageMonths: 60, score: 3.0, description: '找不同（5个）', note: '' },
  { id: 'AD_24_2', domain: 'AD', groupId: '24', ageMonths: 60, score: 3.0, description: '图画补缺（5/6）', note: '' },
  { id: 'LA_24_1', domain: 'LA', groupId: '24', ageMonths: 60, score: 3.0, description: '你姓什么？', note: '' },
  { id: 'LA_24_2', domain: 'LA', groupId: '24', ageMonths: 60, score: 3.0, description: '说出两种圆形的东西', note: '' },
  { id: 'SB_24_1', domain: 'SB', groupId: '24', ageMonths: 60, score: 6.0, description: '你家住哪里？', note: '' },

  // ═══════════════════════════════════════
  // 66月龄（scorePerGroup=6.0，各域2项=3.0）
  // ═══════════════════════════════════════
  { id: 'GM_25_1', domain: 'GM', groupId: '25', ageMonths: 66, score: 3.0, description: '接球', note: '' },
  { id: 'GM_25_2', domain: 'GM', groupId: '25', ageMonths: 66, score: 3.0, description: '足尖对足跟向后走2m', note: '' },
  { id: 'FM_25_1', domain: 'FM', groupId: '25', ageMonths: 66, score: 3.0, description: '会写自己的名字', note: '' },
  { id: 'FM_25_2', domain: 'FM', groupId: '25', ageMonths: 66, score: 3.0, description: '剪平滑圆形', note: '' },
  { id: 'AD_25_1', domain: 'AD', groupId: '25', ageMonths: 66, score: 3.0, description: '树间站人', note: '' },
  { id: 'AD_25_2', domain: 'AD', groupId: '25', ageMonths: 66, score: 3.0, description: '十字切苹果', note: '' },
  { id: 'LA_25_1', domain: 'LA', groupId: '25', ageMonths: 66, score: 3.0, description: '知道自己属相', note: '' },
  { id: 'LA_25_2', domain: 'LA', groupId: '25', ageMonths: 66, score: 3.0, description: '倒数数字', note: '' },
  { id: 'SB_25_1', domain: 'SB', groupId: '25', ageMonths: 66, score: 3.0, description: '为什么要走人行横道？', note: '' },
  { id: 'SB_25_2', domain: 'SB', groupId: '25', ageMonths: 66, score: 3.0, description: '鸡在水中游', note: '' },

  // ═══════════════════════════════════════
  // 72月龄（scorePerGroup=6.0，各域2项=3.0）
  // ═══════════════════════════════════════
  { id: 'GM_26_1', domain: 'GM', groupId: '26', ageMonths: 72, score: 3.0, description: '抱肘连续跳', note: '' },
  { id: 'GM_26_2', domain: 'GM', groupId: '26', ageMonths: 72, score: 3.0, description: '拍球（2个）', note: '' },
  { id: 'FM_26_1', domain: 'FM', groupId: '26', ageMonths: 72, score: 3.0, description: '拼长方形', note: '' },
  { id: 'FM_26_2', domain: 'FM', groupId: '26', ageMonths: 72, score: 3.0, description: '临摹组合图形', note: '' },
  { id: 'AD_26_1', domain: 'AD', groupId: '26', ageMonths: 72, score: 3.0, description: '找不同（7个）', note: '' },
  { id: 'AD_26_2', domain: 'AD', groupId: '26', ageMonths: 72, score: 3.0, description: '知道左右', note: '' },
  { id: 'LA_26_1', domain: 'LA', groupId: '26', ageMonths: 72, score: 3.0, description: '描述图画内容', note: '' },
  { id: 'LA_26_2', domain: 'LA', groupId: '26', ageMonths: 72, score: 3.0, description: '上班、窗、苹果、香蕉（2/3）', note: '' },
  { id: 'SB_26_1', domain: 'SB', groupId: '26', ageMonths: 72, score: 3.0, description: '一年有哪四个季节？', note: '' },
  { id: 'SB_26_2', domain: 'SB', groupId: '26', ageMonths: 72, score: 3.0, description: '认识标识', note: '' },

  // ═══════════════════════════════════════
  // 78月龄（scorePerGroup=6.0，各域2项=3.0）
  // ═══════════════════════════════════════
  { id: 'GM_27_1', domain: 'GM', groupId: '27', ageMonths: 78, score: 3.0, description: '踢带绳的球', note: '' },
  { id: 'GM_27_2', domain: 'GM', groupId: '27', ageMonths: 78, score: 3.0, description: '拍球（5个）', note: '' },
  { id: 'FM_27_1', domain: 'FM', groupId: '27', ageMonths: 78, score: 3.0, description: '临摹六边形', note: '' },
  { id: 'FM_27_2', domain: 'FM', groupId: '27', ageMonths: 78, score: 3.0, description: '试打活结', note: '' },
  { id: 'AD_27_1', domain: 'AD', groupId: '27', ageMonths: 78, score: 3.0, description: '图形类比', note: '' },
  { id: 'AD_27_2', domain: 'AD', groupId: '27', ageMonths: 78, score: 3.0, description: '面粉的用途', note: '' },
  { id: 'LA_27_1', domain: 'LA', groupId: '27', ageMonths: 78, score: 3.0, description: '归纳图画主题', note: '' },
  { id: 'LA_27_2', domain: 'LA', groupId: '27', ageMonths: 78, score: 3.0, description: '认识钟表', note: '' },
  { id: 'SB_27_1', domain: 'SB', groupId: '27', ageMonths: 78, score: 3.0, description: '懂得星期几', note: '' },
  { id: 'SB_27_2', domain: 'SB', groupId: '27', ageMonths: 78, score: 3.0, description: '雨中看书', note: '' },

  // ═══════════════════════════════════════
  // 84月龄（scorePerGroup=6.0，各域2项=3.0）
  // ═══════════════════════════════════════
  { id: 'GM_28_1', domain: 'GM', groupId: '28', ageMonths: 84, score: 3.0, description: '连续踢带绳的球', note: '' },
  { id: 'GM_28_2', domain: 'GM', groupId: '28', ageMonths: 84, score: 3.0, description: '交替踩踏板', note: '' },
  { id: 'FM_28_1', domain: 'FM', groupId: '28', ageMonths: 84, score: 3.0, description: '学翻绳', note: '' },
  { id: 'FM_28_2', domain: 'FM', groupId: '28', ageMonths: 84, score: 3.0, description: '打活结', note: '' },
  { id: 'AD_28_1', domain: 'AD', groupId: '28', ageMonths: 84, score: 3.0, description: '数字类比', note: '' },
  { id: 'AD_28_2', domain: 'AD', groupId: '28', ageMonths: 84, score: 3.0, description: '什么动物没有脚？', note: '' },
  { id: 'LA_28_1', domain: 'LA', groupId: '28', ageMonths: 84, score: 3.0, description: '为什么要进行预防接种？', note: '' },
  { id: 'LA_28_2', domain: 'LA', groupId: '28', ageMonths: 84, score: 3.0, description: '毛衣、裤、鞋共同点', note: '' },
  { id: 'SB_28_1', domain: 'SB', groupId: '28', ageMonths: 84, score: 3.0, description: '紧急电话', note: '' },
  { id: 'SB_28_2', domain: 'SB', groupId: '28', ageMonths: 84, score: 3.0, description: '猫头鹰抓老鼠', note: '' },
];

// 总项目数验证：261项
// console.assert(SCALE_ITEMS.length === 261, `期望261项，实际${SCALE_ITEMS.length}项`);
