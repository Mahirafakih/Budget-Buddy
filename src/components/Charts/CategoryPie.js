import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';


const COLORS = ['#FFC0CB', '#fffbeb', '#e0e7ff', '#f9a8d4', '#d946ef'];

const CategoryPieChart = ({ transactions }) => {
    if (!transactions || transactions.length === 0) {
        return null; // 
    }
  const categoryData = {};

  transactions.forEach(t => {
    categoryData[t.category] = (categoryData[t.category] || 0) + t.amount;
  });

  const data = Object.entries(categoryData).map(([name, value]) => ({ name, value }));

  return (
    <>
    <div className="chart-container">
      <h2>Category Wise Expenses</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={120} stroke="#1f2937"         // border color (matches dark theme)
  strokeWidth={2}   label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip  contentStyle={{
              backgroundColor: "#1f2937",
              border: "none",
              borderRadius: "8px",
              color: "#fbb6ce",
              cursor:"pointer"
            }}
            itemStyle={{ color: "#fff" }}
            />
        </PieChart>
      </ResponsiveContainer>
    </div>
    
    </>
  );
};

export default CategoryPieChart;