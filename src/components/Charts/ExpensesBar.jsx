import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


const ExpensesBarChart = ({ transactions }) => {
    const monthlyData = {};
    if (!transactions || transactions.length === 0) {
        return null; // 
    }

    transactions.forEach(t => {
        const month = new Date(t.date).toLocaleString('default', { month: 'short' });
        monthlyData[month] = (monthlyData[month] || 0) + t.amount;
    });

    const data = Object.entries(monthlyData).map(([month, total]) => ({ month, total }));

    return (


        <div className="chart-container">
            <h2>Monthly Expenses</h2>
            <ResponsiveContainer className="bar-chart" width="50%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#1f2937",  // dark card bg
                            borderRadius: "8px",
                            border: "transparent",
                            color: "#fbb6ce"
                        }}
                        itemStyle={{
                            color: "#ed6188"
                        }}
                        labelStyle={{
                            color: "#fbb6ce"
                        }}
                        cursor={{ fill: 'transparent' }}
                    />
                    <Bar dataKey="total" fill="#fbb6ce" radius={[8, 8, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>

    );

};

export default ExpensesBarChart;