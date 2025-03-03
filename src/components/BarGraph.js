import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; // Ensure the correct import
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const BarGraph = () => {
  const { expenses } = useContext(AppContext); // Access expenses from the context

  const data = expenses.map((department) => ({
    name: department.name,
    cost: department.cost,
  }));

  return (
    <div>
      <h3>Department Costs Graph</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cost" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
