const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();
const DATA_DIR = path.join(__dirname, '..', 'data', 'children');

function readChild(id) {
  const file = path.join(DATA_DIR, `${id}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, 'utf-8'));
}

// 原子写文件，防止写到一半损坏数据
function writeChild(data) {
  const file = path.join(DATA_DIR, `${data.id}.json`);
  const tmp = file + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2), 'utf-8');
  fs.renameSync(tmp, file);
  return data;
}

// GET /api/children — 获取所有孩子列表（仅摘要）
router.get('/', (req, res) => {
  try {
    const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json'));
    const list = files.map(f => {
      const d = JSON.parse(fs.readFileSync(path.join(DATA_DIR, f), 'utf-8'));
      const passCount = Object.values(d.assessments || {})
        .filter(a => a.status === 'pass').length;
      // 最近一次测量记录
      const measurements = d.measurements || [];
      const lastMeasurement = measurements.length > 0
        ? measurements[measurements.length - 1]
        : null;
      return {
        id: d.id,
        name: d.name,
        gender: d.gender,
        birthDate: d.birthDate,
        createdAt: d.createdAt,
        updatedAt: d.updatedAt,
        passCount,
        lastMeasurement,
      };
    });
    list.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/children — 创建孩子档案
router.post('/', (req, res) => {
  const { name, gender, birthDate } = req.body;
  if (!name || !gender || !birthDate) {
    return res.status(400).json({ error: '缺少必要字段：name、gender、birthDate' });
  }
  const now = new Date().toISOString();
  const data = {
    id: uuidv4(),
    name,
    gender,
    birthDate,
    createdAt: now,
    updatedAt: now,
    assessments: {},
  };
  res.status(201).json(writeChild(data));
});

// GET /api/children/:id — 获取单个孩子完整数据
router.get('/:id', (req, res) => {
  const data = readChild(req.params.id);
  if (!data) return res.status(404).json({ error: '未找到' });
  res.json(data);
});

// PATCH /api/children/:id — 更新孩子基本信息
router.patch('/:id', (req, res) => {
  const data = readChild(req.params.id);
  if (!data) return res.status(404).json({ error: '未找到' });
  const allowed = ['name', 'gender', 'birthDate'];
  for (const key of allowed) {
    if (req.body[key] !== undefined) data[key] = req.body[key];
  }
  data.updatedAt = new Date().toISOString();
  res.json(writeChild(data));
});

// DELETE /api/children/:id — 删除孩子档案
router.delete('/:id', (req, res) => {
  const file = path.join(DATA_DIR, `${req.params.id}.json`);
  if (!fs.existsSync(file)) return res.status(404).json({ error: '未找到' });
  fs.unlinkSync(file);
  res.status(204).end();
});

// PUT /api/children/:id/assessments — 批量合并更新测查记录
router.put('/:id/assessments', (req, res) => {
  const data = readChild(req.params.id);
  if (!data) return res.status(404).json({ error: '未找到' });
  const incoming = req.body.assessments || {};
  data.assessments = { ...data.assessments, ...incoming };
  data.updatedAt = new Date().toISOString();
  res.json(writeChild(data));
});

// ── 生长记录 API ──

// POST /api/children/:id/measurements — 添加测量记录
router.post('/:id/measurements', (req, res) => {
  const data = readChild(req.params.id);
  if (!data) return res.status(404).json({ error: '未找到' });
  const { date, weight, height, headCirc } = req.body;
  if (!date) return res.status(400).json({ error: '缺少日期' });

  if (!data.measurements) data.measurements = [];

  // 计算月龄
  const birth = new Date(data.birthDate);
  const mDate = new Date(date);
  const ageMonths = +((mDate - birth) / (1000 * 60 * 60 * 24 * 30.4375)).toFixed(1);

  const record = {
    id: uuidv4(),
    date,
    ageMonths,
    weight: weight != null ? +weight : null,
    height: height != null ? +height : null,
    headCirc: headCirc != null ? +headCirc : null,
  };
  data.measurements.push(record);
  data.measurements.sort((a, b) => a.date.localeCompare(b.date));
  data.updatedAt = new Date().toISOString();
  writeChild(data);
  res.status(201).json(record);
});

// PUT /api/children/:id/measurements/:mid — 修改测量记录
router.put('/:id/measurements/:mid', (req, res) => {
  const data = readChild(req.params.id);
  if (!data) return res.status(404).json({ error: '未找到' });
  if (!data.measurements) return res.status(404).json({ error: '记录未找到' });

  const idx = data.measurements.findIndex(m => m.id === req.params.mid);
  if (idx === -1) return res.status(404).json({ error: '记录未找到' });

  const { date, weight, height, headCirc } = req.body;
  const rec = data.measurements[idx];
  if (date) {
    rec.date = date;
    const birth = new Date(data.birthDate);
    const mDate = new Date(date);
    rec.ageMonths = +((mDate - birth) / (1000 * 60 * 60 * 24 * 30.4375)).toFixed(1);
  }
  if (weight !== undefined) rec.weight = weight != null ? +weight : null;
  if (height !== undefined) rec.height = height != null ? +height : null;
  if (headCirc !== undefined) rec.headCirc = headCirc != null ? +headCirc : null;

  data.measurements.sort((a, b) => a.date.localeCompare(b.date));
  data.updatedAt = new Date().toISOString();
  writeChild(data);
  res.json(rec);
});

// DELETE /api/children/:id/measurements/:mid — 删除测量记录
router.delete('/:id/measurements/:mid', (req, res) => {
  const data = readChild(req.params.id);
  if (!data) return res.status(404).json({ error: '未找到' });
  if (!data.measurements) return res.status(404).json({ error: '记录未找到' });

  const idx = data.measurements.findIndex(m => m.id === req.params.mid);
  if (idx === -1) return res.status(404).json({ error: '记录未找到' });

  data.measurements.splice(idx, 1);
  data.updatedAt = new Date().toISOString();
  writeChild(data);
  res.status(204).end();
});

// PATCH /api/children/:id/assessments/:itemId — 更新单个测查项
router.patch('/:id/assessments/:itemId', (req, res) => {
  const data = readChild(req.params.id);
  if (!data) return res.status(404).json({ error: '未找到' });
  const { status, date } = req.body;
  data.assessments[req.params.itemId] = { status, date: date || null };
  data.updatedAt = new Date().toISOString();
  writeChild(data);
  res.json({ itemId: req.params.itemId, status, date: date || null });
});

module.exports = router;
