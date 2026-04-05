# DSC06 — Developmental Scale for Children Aged 0–6 Years

**《0～6岁儿童发育行为评估量表》Web 实现**

基于中华人民共和国卫生行业标准 [WS/T 580—2017](https://www.nhc.gov.cn/) 开发的儿童发育行为在线评估工具，供家长记录和追踪孩子的发育里程碑。

---

## 功能

- 录入孩子基本信息，按月龄自动匹配评估组
- 支持回溯录入历史发育记录
- 261 个评估项目，覆盖 28 个月龄组 × 5 个能区（大运动、精细运动、语言、适应性、个人-社会）
- 自动评分，生成发育报告
- 数据存储于服务端 JSON 文件，不依赖 localStorage

---

## 技术栈

- **后端**：Node.js v20 + Express 4
- **前端**：原生 HTML / CSS / JavaScript（无框架依赖）
- **数据存储**：`data/children/{uuid}.json`（原子写入）

---

## 本地部署

### 前置条件

- Node.js v18+

### 步骤

```bash
# 克隆仓库
git clone https://github.com/rangerqu/dsc06.git
cd dsc06

# 安装依赖
npm install

# 启动服务
npm start
```

服务默认运行于 `http://localhost:3000`。

### 自定义端口

```bash
PORT=8080 npm start
```

---

## 数据目录

数据文件存储于 `data/children/`，该目录已在 `.gitignore` 中排除，不会上传至仓库。首次启动时自动创建。

---

## 标准来源

本项目基于以下卫生行业标准实现：

> 中华人民共和国国家卫生和计划生育委员会. *WS/T 580—2017 0～6岁儿童发育行为评估量表*. 2017.

量表内容版权归原标准制定机构所有，本项目仅为个人及非商业用途的技术实现。

---

## License

MIT
