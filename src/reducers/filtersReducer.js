
import { constants } from '../actions/constants';

const defaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = defaultState, action) => {
    switch(action.type) {
        case constants.SET_TEXT_FILTER:
            return {
                ...state,
                text: action.text
            }

        default:
            return state;
    }
}

export default filtersReducer;