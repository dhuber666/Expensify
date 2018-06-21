import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import {bindActionCreators } from 'redux';

class AddExpense extends React.Component {

    state = {
        title: '',
        amount: '',
        
    }

    onSubmit = e => {
        e.preventDefault();
        const expense = {
            title: this.state.title,
            amount: this.state.amount,
        }
        this.props.actions.addExpense(expense);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    Titel:<br />
                    <input type='text' name='title' value={this.state.title} onChange={e => this.setState({ title: e.target.value })}/><br />
                    Betrag:<br />
                    <input type='text' name='amount' value={this.state.amount} onChange={e => this.setState({ amount: e.target.value })}/><br />
                    <input type='submit' value='Hinzufügen' />
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(AddExpense);