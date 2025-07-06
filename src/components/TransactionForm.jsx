"use client";

import React, { useState } from 'react';
import { categories } from '../utils/categories';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

const TransactionForm = ({ onAdd }) => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('Food');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount || !date) {
            alert('Amount and Date are required!');
            return;
        }
        onAdd({
            amount: parseFloat(amount),
            description,
            date,
            category,
        });
        setAmount('');
        setDescription('');
        setDate('');
        setCategory('Food');
    };

    return (
        <div className="transaction-form-wrp">
            <h2 className="form-ttl">Add Transaction</h2>
            <form onSubmit={handleSubmit} className="grid gap-4 transaction-form" >
                <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                    />
                </div>

                <div>
                    <Label htmlFor="description">Description</Label>
                    <Input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Optional"
                    />
                </div>

                <div className='flex gap-2'>
                    <Label htmlFor="date">Date</Label>
                    <Input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div className='flex gap-2'>
                    <Label htmlFor="category">Category</Label>
                    <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((cat) => (
                                <SelectItem key={cat} value={cat}>
                                    {cat}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <Button type="submit" className="deletebtn">Add Transaction</Button>
            </form>
        </div>
    );
};

export default TransactionForm;
