// Import the Bar chart component from Ant Design Charts
// 从 Ant Design Charts 导入柱状图组件
import { Bar } from '@ant-design/charts';

// Sample data for the bar chart
// 柱状图的示例数据
const data = [
  { type: 'A', value: 30 },
  { type: 'B', value: 80 },
  { type: 'C', value: 45 },
];

// Configuration for the bar chart
// 柱状图的配置
const config = {
  data, // Chart data 数据
  xField: 'type', // X-axis field X 轴字段
  yField: 'value', // Y-axis field Y 轴字段
  color: '#5B8FF9', // Bar color 柱状颜色
  label: { 
    position: 'middle', // Label position 标签位置
    style: { fill: '#fff' } // Label style 标签样式
  },
};

// Main App component
// 主 App 组件
function App() {
  return (
    // Centered container with fixed width
    // 居中容器，固定宽度
    <div style={{ width: 600, margin: '40px auto'}}>
      {/* Chart title */}
      {/* 图表标题 */}
      <h2>AntV Bar Chart Example</h2>
      <h2>AntV 柱状图示例</h2>
      {/* Render the Bar chart */}
      {/* 渲染柱状图 */}
      <Bar {...config} />
    </div>
  );
}

export default App;