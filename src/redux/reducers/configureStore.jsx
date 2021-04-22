import { createStore } from "redux"
import rootReducer from './index'

const configureStore = createStore(rootReducer);
export default configureStore