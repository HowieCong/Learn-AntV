import React from 'react';
import { Bar } from '@ant-design/charts';

const data = [
  { type: '分类A', value: 30 },
  { type: '分类B', value: 80 },
  { type: '分类C', value: 45 },
  { type: '分类D', value: 60 },
];

const config = {
  data,
  xField: 'type',
  yField: 'value',
  color: '#5B8FF9',
  label: {
    position: 'middle',
    style: { fill: '#fff', fontSize: 14 },
  },
  tooltip: {},
  legend: false,
};

const BasicBarDemo: React.FC = () => (
  <div style={{ width: 600, margin: '40px auto' }}>
    <h2>AntV Basic Bar Chart Demo</h2>
    <h2>AntV 基础柱状图实战</h2>
    <Bar {...config} />
    <div style={{ marginTop: 24, color: '#888', fontSize: 14 }}>
      <p>数据格式：</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p>你可以在 <code>src/BasicBarDemo.tsx</code> 修改数据和配置项，实时查看效果。</p>
    </div>
  </div>
);

export default BasicBarDemo;