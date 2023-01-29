import IceCreamReducer from './IceCream/IceCreamReducer'
import CakeReducer from './cakes/CakeReducer'
import { combineReducers } from 'redux'

const allReducer = combineReducers({
    ice:IceCreamReducer,
    cake:CakeReducer
})
export default allReducer;