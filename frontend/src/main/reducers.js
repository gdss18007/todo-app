import { combineReducers } from 'redux'
import reducer from '../pages/reducer'

const rootReducer = combineReducers({
    paciente: reducer
})
export default rootReducer