import { REQUEST_WEATHER } from "../constants/ActionTypes"
import { GET_CITY } from "../constants/ActionTypes"

  const initialState={
    weather:[],
    cityName:""
  }
  export const weatherReducer=(state = initialState,action)=>{
    switch(action.type){
      case REQUEST_WEATHER:return{
        ...state,
        weather:action.weather
      }
    
    case GET_CITY:return{
      ...state,
      cityName:action.city

    }
    default:return state;
  }
}

