import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';
import { Expense } from '../../interfaces/expenses';
const NewExpense = (props: { onAddExpense: (arg0: Expense) => void; }) => {

  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };

    props.onAddExpense(expenseData);
  }

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense;