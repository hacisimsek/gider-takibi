import { ADD_TRANSACTION , DELETE_TRANSACTION } from "../actions/actionTypes";
import initialState from "./initialState"

const transactionListReducer = (state=initialState.transactions,action) => {
    switch(action.type) {
        case DELETE_TRANSACTION:
          return [...state, state.filter(liste => liste.id !== action.payload)]

        case ADD_TRANSACTION :
          return [...state, action.payload];
        default:
          return state;
      }
}
export default transactionListReducer
