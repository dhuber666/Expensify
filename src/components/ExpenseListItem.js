import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/index';

const ExpenseListItem = ({ title, amount, notes, id, dispatch}) => (
    
    <div>
        <hr />
        <h3>{title} </h3>
        <h5> {amount} Euro</h5>
        <p> {notes} </p>
        <button onClick={() => dispatch(removeExpense(id))}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem);