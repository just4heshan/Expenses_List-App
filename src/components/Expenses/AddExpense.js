import { useState } from 'react';
import './AddExpense.css'


function AddExpense(props) {
    const addExpense = 'My Expenses';
    const [title, setTitle] = useState(addExpense);

    function clickHandler()  {
        setTitle('Hi there !');
        console.log('Clicked');
    }

    return <div className='add-expense' onPointerOver={clickHandler} >{title}</div>
}

export default AddExpense;