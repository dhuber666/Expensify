import { constants } from '../actions/constants';

const seed = [
    {
        id: 1,
        title: "Kino",
        notes: "War sehr teuer",
        createdAt: 300,
        amount: 20
    },
    {
        id: 2,
        title: "Essen",
        notes: "",
        createdAt: 1000,
        amount: 3 
    }
]

const expensesReducer = (state = seed, action) => {
    switch(action.type) {
        case constants.ADD_EXPENSE:
            
            return [
                ...state,
                action.expense
            ]
        default:
            return state;
    }
}

export default expensesReducer;