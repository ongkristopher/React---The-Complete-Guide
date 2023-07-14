import { SetStateAction, useState } from 'react';
import { Expense } from '../../interfaces/expenses';
import './ExpenseForm.css';

export const ExpenseForm = (props: { onSaveExpenseData: (arg0: Expense) => void; }) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const expenseData: Expense = {
            title: enteredTitle,
            amount: parseInt(enteredAmount),
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2024-12-31' value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
