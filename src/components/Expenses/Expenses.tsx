import { useState } from 'react';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import { Expense } from '../../interfaces/expenses';

const Expenses = (props: { items: Expense[]; }) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={filteredYear}
                onfilterChange={filterChangeHandler} />
            <ExpensesList items={filteredExpenses} />
        </Card>
        
    )
}

export default Expenses;