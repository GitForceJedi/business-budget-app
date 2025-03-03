import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; // Ensure correct import
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF637D']; // Example colors for each slice

const PieGraph = () => {
  const { expenses } = useContext(AppContext); // Access expenses from the context

  // Prepare the data for the Pie chart
  const data = expenses.map((department, index) => ({
    name: department.name,
    value: department.cost,
    fill: COLORS[index % COLORS.length], // Cycle through colors if there are more than 5 expenses
  }));

  return (
    <div>
      <h3>Department Costs Pie Chart</h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieGraph;
