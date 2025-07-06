"use client"
import React, { useState, useEffect } from 'react';
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


const EditTransactionForm = ({ onEdit, editingTransaction }) => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('Food');

    useEffect(() => {
        if (editingTransaction) {
            setAmount(editingTransaction.amount);
            setDescription(editingTransaction.description);
            setDate(editingTransaction.date);
            setCategory(editingTransaction.category);
        }
    }, [editingTransaction]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onEdit({ amount: parseFloat(amount), description, date, category, id: editingTransaction.id });
    };

    return (
        <>
            <div className="transaction-form-wrp">
                <h2 className='form-ttl'>Edit Transaction</h2>
                <form onSubmit={handleSubmit} className="grid gap-4 transaction-form">

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

                    <Button className="deletebtn" type="submit">Update Transaction</Button>
                    <Button className="secondry-btn" type="cancel">Cancel</Button>
                </form>
            </div>
        </>
    );
};

export default EditTransactionForm;