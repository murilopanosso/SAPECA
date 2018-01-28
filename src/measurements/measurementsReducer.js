import {reducer as formReducer} from 'redux-form';

const INITIAL_STATE = {result:0};

export default (state = INITIAL_STATE, action) => {

    switch (action.type){
        case 'MEASUREMENTS_CALCULATIONS':
        console.log(action);
            return {
                ...state,
                mr: action.payload
            }
        default:
            return state    
    }

}