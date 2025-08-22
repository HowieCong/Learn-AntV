# React + TypeScript +AntV 环境搭建教学

本教程将手把手教使用 Vite 创建 React + TypeScript 项目，并集成 AntV 相关依赖，适合 AntV 新手快速上手。

---

## 1. 环境准备

- **Node.js**：建议 20.x 及以上版本（可用 `node -v` 检查）
- **包管理器**：推荐 yarn 或 npm
- **nvm（可选）**：用于管理 Node 版本

---

## 2. 创建 React + TypeScript 项目

在终端执行：

```bash
yarn create vite learn-antv-demo --template react-ts
# 或者使用 npm
# npm create vite@latest learn-antv-demo -- --template react-ts
```

进入项目目录：

```bash
cd learn-antv-demo
```

安装依赖：

```bash
yarn
# 或 npm install
```

---

## 3. 安装 AntV 相关依赖

推荐安装以下常用包：

```bash
yarn add @ant-design/charts @antv/g2plot @antv/g6
# 或 npm install @ant-design/charts @antv/g2plot @antv/g6
```

---

## 4. 运行项目

启动开发服务器：

```bash
yarn dev
# 或 npm run dev
```

浏览器访问 [http://localhost:5173](http://localhost:5173) 查看效果。

---

## 5. 添加第一个 AntV 图表（柱状图）

编辑 `src/App.tsx`，替换为如下内容：

```tsx
// filepath: learn-antv-demo/src/App.tsx
import { Bar } from '@ant-design/charts';

const data = [
  { type: 'A', value: 30 },
  { type: 'B', value: 80 },
  { type: 'C', value: 45 },
];

const config = {
  data,
  xField: 'type',
  yField: 'value',
  color: '#5B8FF9',
  label: { position: 'middle', style: { fill: '#fff' } },
};

function App() {
  return (
    <div style={{ width: 600, margin: '40px auto' }}>
      <h2>AntV 柱状图示例</h2>
      <Bar {...config} />
    </div>
  );
}

export default App;
```

保存后，浏览器会自动刷新，显示一个简单的柱状图。

---

## 6. 项目结构说明

```
learn-antv-demo/
├─ node_modules/
├─ public/
├─ src/
│  ├─ App.tsx         # 入口组件
│  ├─ main.tsx        # 应用入口
│  └─ ...
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

---

## 7. 常见问题与解决

- **权限问题**：如遇 `EACCES`，请用 `sudo chown -R $(whoami) ~/.config/yarn` 修复权限。
- **Node 版本不符**：建议用 nvm 管理 Node，升级到 20.x 及以上。
- **依赖安装失败**：可尝试删除 `node_modules` 和 `yarn.lock`/`package-lock.json` 后重新安装。

---

## 8. 参考链接

- [Vite 官方文档](https://vitejs.dev/)
- [Ant Design Charts](https://charts.ant.design/)
- [AntV G2Plot](https://g2plot.antv.vision/)
- [AntV G6](https://g6.antv.vision/)

---

> 建议：完成环境搭建后，建议多尝试不同类型的图表，逐步熟悉 AntV 的用法和配置