import React, { useState } from 'react';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter
                    selectedYear={filteredYear} 
                    onfilterChange={filterChangeHandler}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </li>
        
    )
}

export default Expenses;