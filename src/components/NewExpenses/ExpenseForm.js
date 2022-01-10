import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [enteredValue, setEnteredValue] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
            // setEnteredTitle((prevState) => {
            //     return {...prevState, enteredTitle: event.target.value};
            // });
           
    };

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
        // setEnteredAmount((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // });
        
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setEnteredDate((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // });
        
    };

    const addExpenseHandler = (event) => {
        event.preventDefault();
        const ExpenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(ExpenseData);


        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };

    return(<form onSubmit={addExpenseHandler} >
        <div className='new-expense__controls'>
          <div className='new-expense__date'>
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
          </div>
          <div className='new-expense__amount'>
            <label>Amount</label>
            <input type='text' value={enteredAmount} onChange={amountChangeHandler} min='0' max='100' />
          </div>
          <div className='new-expense__date'>
            <label>Date</label>
            <input type='date' value={enteredDate} onChange={dateChangeHandler} />
          </div >
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
      </form>);
  
}

export default ExpenseForm;
