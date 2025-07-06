import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button"
import { MdOutlineDelete } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";

const TransactionList = ({ transactions, onDelete, onEdit, fetchTransactions }) => (
    <div className="transaction-list">
        <h2>Transactions</h2>
        {transactions.length === 0 && <p>No transactions yet!</p>}
        <ul>
            {transactions.map(t => (
                <li key={t.id}>
                    ₹ {t.amount} --- {t.description} {new Date(t.date).toLocaleDateString()}
                    <div>
                        <Button className="editbtn" onClick={() => onEdit(t)}><FiEdit2 className='icon' /></Button>
                        <Button className="deletebtn" onClick={() => onDelete(t.id)}><MdOutlineDelete /></Button>
                    </div></li>
            ))}
        </ul>
    </div>
);

export default TransactionList;