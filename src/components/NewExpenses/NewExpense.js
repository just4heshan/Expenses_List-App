import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (eneteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...eneteredExpenseData
        }

        props.onShowEnteredData(expenseData);
    }

    return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData= {saveExpenseDataHandler}/>
    </div>);
}

export default NewExpense;