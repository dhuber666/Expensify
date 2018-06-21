import React from 'react';

const ExpenseListItem = ({ title, amount, notes}) => (
    
    <div>
        <hr />
        <h3>{title} </h3>
        <h5> {amount} Euro</h5>
        <p> {notes} </p>
    </div>
    
)

export default ExpenseListItem;