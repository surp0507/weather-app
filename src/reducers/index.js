import { combineReducers } from 'redux'
import { weatherReducer } from './weatherReducer';
import { loginReducer } from './LoginReducer'
import historyReducer from './historyReducer'
import langTut from './langTut';

const reducer=combineReducers({
  loginReducer,
  weatherReducer,
  historyReducer,
  langTut
})
export default reducer;
