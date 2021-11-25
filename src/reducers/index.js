import { combineReducers } from 'redux'
import { weatherReducer } from './weatherReducer';
import { loginReducer } from './LoginReducer'

const reducer=combineReducers({
  loginReducer,
  weatherReducer
})
export default reducer;
