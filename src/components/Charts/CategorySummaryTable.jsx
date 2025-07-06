import React from "react";

const CategorySummaryTable = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return null;
  }


  const categoryTotals = {};

  transactions.forEach((t) => {
    categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
  });

  const summary = Object.entries(categoryTotals).map(([category, total]) => ({
    category,
    total,
  }));

  return (
    <>

      <div className="summary-table">
        <h2 className="text-lg font-semibold text-primary mb-4">
          Category Summary
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-500 dark:border-gray-700">
                <th className="px-4 py-2 text-white">Category</th>
                <th className="px-4 py-2 text-white">Total Spent</th>
              </tr>
            </thead>
            <tbody>
              {summary.map(({ category, total }) => (
                <tr key={category}>
                  <td className="px-4 py-3 text-white">{category}</td>
                  <td className="px-4 py-3 text-white">₹{total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CategorySummaryTable;
