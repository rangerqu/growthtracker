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
      return {
        id: d.id,
        name: d.name,
        gender: d.gender,
        birthDate: d.birthDate,
        createdAt: d.createdAt,
        updatedAt: d.updatedAt,
        passCount,
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
