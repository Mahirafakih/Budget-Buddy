import React from "react";

import CategorySummaryTable from "./Charts/CategorySummaryTable";
import RecentTransactions from "./Charts/RecentTransactions";

const SummaryDashboard = ({ transactions }) => {
    const total = transactions.reduce((sum, t) => sum + t.amount, 0);
    if (!transactions || transactions.length === 0) return null;
    return (
        <div className="summary-dashboard">
            <div className="summary-table">
                <h2>Total Expenses</h2>
                <p className="text-2xl font-bold mt-1 text-white">₹{total.toFixed(2)}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CategorySummaryTable transactions={transactions} />
                <RecentTransactions transactions={transactions} />
            </div>

        </div>
    );
};

export default SummaryDashboard;
