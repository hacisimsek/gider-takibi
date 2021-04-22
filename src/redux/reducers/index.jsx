import { combineReducers } from "redux";
import tramsactionListReducer from './transactionListReducer'

const rootReducer = combineReducers({
   transaction : tramsactionListReducer
})

export default rootReducer