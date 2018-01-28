import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import TabReducer from '../common/tab/tabReducer';
import MeasurementsReducer from '../measurements/measurementsReducer';


const rootReducer = combineReducers({
    tab: TabReducer,
    form: formReducer,
    measurements: MeasurementsReducer
})



export default rootReducer