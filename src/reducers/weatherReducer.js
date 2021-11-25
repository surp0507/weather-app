import { REQUEST_WEATHER } from "../constants/ActionTypes"
import { GET_CITY } from "../constants/ActionTypes"

const initialState={
    weather:[{
       id:1,
      name:"indore",
      temp:291.75,
      press:1015
    },
    {
      id:2,
    name:"mumbai",
    temp:154.60,
    press:2015

    },
    { 
      id:3,
      name:"delhi",
      temp:164.60,
      press:2015
  
      }
  ],
    cityName:"indore"
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

console.log(initialState.weather);