import {createStore} from 'redux'
import allReducer from './RootReducer'
const store = createStore(allReducer)

export default store
