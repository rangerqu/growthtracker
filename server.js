const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// 确保数据目录存在
fs.mkdirSync(path.join(__dirname, 'data', 'children'), { recursive: true });

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/children', require('./routes/children'));

// 所有未匹配路由返回 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`lifetools 运行于 http://0.0.0.0:${PORT}`);
});
