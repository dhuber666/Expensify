import { constants } from './constants';
import uuid from 'uuid';

// Expenses 

export const addExpense = ({
    title = '',
    notes = '',
    amount = 0,
    createdAt = 0
}) => ({
    type: constants.ADD_EXPENSE,
    expense: {
        id: uuid.v4(),
        title,
        notes,
        amount,
        createdAt: Date.now()
    }
})

export const removeExpense = (id) => ({
    type: constants.REMOVE_EXPENSE,
    id
})

// Filters

export const setTextFilter = (text) => ({
    type: constants.SET_TEXT_FILTER,
    text
})
