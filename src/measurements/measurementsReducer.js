import {reducer as formReducer} from 'redux-form';

const INITIAL_STATE = {result:0};

export default (state = INITIAL_STATE, action) => {

    switch (action.type){
        case 'MEASUREMENTS_CALCULATIONS':
            return {
                ...state,
                mr: action.payload
            }
        case 'POPULATE_SELECT_LOSS_TYPE':
            return {
                ...state,
                options: action.payload
            }
        default:
            return state    
    }

}