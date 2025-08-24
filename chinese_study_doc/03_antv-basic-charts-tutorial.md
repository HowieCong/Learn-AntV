# AntV 基础图表开发教学

本节将带你系统学习 AntV 在 React 项目中的基础图表开发，包括柱状图、折线图、饼图、散点图、面积图、雷达图、进度图/仪表盘等。

---

## 1. 柱状图（Bar）

- **数据结构**：每项包含 x/y 轴字段，如 `{ type: 'A', value: 30 }`
- **基本配置**：`data`、`xField`、`yField`
- **自定义**：`color`、`label`、`interactions`

## 2. 折线图（Line）

- **多序列**：通过 `seriesField` 区分多条线
- **区域折线图**：`area` 属性
- **自定义点/线样式**：`point`、`lineStyle`

## 3. 饼图（Pie）

- **数据结构**：每项包含类型和值，如 `{ type: 'A', value: 40 }`
- **内外半径**：`radius`、`innerRadius`
- **标签/图例**：`label`、`legend`
- **环形图**：设置 `innerRadius`

## 4. 散点图（Scatter）

- **点大小/颜色映射**：`sizeField`、`colorField`
- **气泡图**：点大小可变

## 5. 面积图（Area）

- **堆叠**：`isStack` 属性
- **平滑曲线**：`smooth` 属性

## 6. 雷达图（Radar）

- **维度配置**：`xField`、`yField`
- **多系列对比**：`seriesField`

---

> 实战代码请见 `src/BasicChartsDemo.tsx`，可通过路由 `/charts` 访问。