import React from "react";

const RecentTransactions = ({ transactions }) => {
    if (!transactions || transactions.length === 0) return null;

    const recent = [...transactions]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);

    const formatDate = (dateStr) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(dateStr).toLocaleDateString('en-IN', options);
    };

    return (
        <div className="summary-table">
            <h2 className="text-lg font-semibold text-primary mb-4">Recent Transactions</h2>
            <ul className="space-y-2">
                {recent.map((t, i) => (
                    <li
                        key={i}
                        className="flex justify-between items-center text-sm text-white"
                    >
                        <span>{t.description || t.category}</span>
                        <div className="flex gap-4 items-center">
                            <span className="text-xs text-gray-500 dark:text-gray-400">{formatDate(t.date)}</span>

                            <span>₹{t.amount.toFixed(2)}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentTransactions;
