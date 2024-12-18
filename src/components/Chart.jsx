"use client"
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Complete', value: 78, color: '#A86300' }, 
  { name: 'Uncomplete', value: 22, color: '#F3F3F3' }, 
];

// Custom Legend Renderer
const renderLegend = (props) => {
  const { payload } = props;
  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '20px' }}>
      {payload.map((entry, index) => {
        const textColor = entry.value === 'Complete' ? '#A86300' : '#888888'; 
        return (
          <li key={`item-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: entry.color, marginRight: '8px' }}>●</span> 
            <span style={{ color: textColor }}>{entry.value}</span> {/* Text color */}
          </li>
        );
      })}
    </ul>
  );
};

const MyPieChart = () => (
  <PieChart width={300} height={300}>
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={100}
      label
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Pie>
    <Tooltip />
    <Legend content={renderLegend} /> 
  </PieChart>
);

export default MyPieChart;
