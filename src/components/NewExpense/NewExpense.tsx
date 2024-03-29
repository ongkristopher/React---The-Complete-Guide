import { useState } from 'react';
import { Expense } from '../../interfaces/expenses';
import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props: { onAddExpense: (arg0: Expense) => void; }) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  )
}

export default NewExpense;