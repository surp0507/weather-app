import * as types from '../constants/ActionTypes'
import user from "../api/user"
export const  loginAction=(login)=>{
  return{
    type:types.LOGIN_PAGE,
     login
  }

}

const validAction=(users)=>{
  return{
    type:types.VALID_LOGIN,
    users
  }
}

export const logData=()=>{
  return dispatch=>{
    user.loggedIn(users=>{
    dispatch(validAction(users))
    })
  }
}


  export const getUsername=(username)=>{
    return{
    type:types.GET_USERNAME,
    username
  }
 }

  export const getPassword=(password)=>{
    return{
    type:types.GET_PASSWORD,
    password
    }

  }

  export const weatherAction=(weather)=>{
   
    return{
      type:types.REQUEST_WEATHER,
      weather
    }
  }

  export const getCityName=(city)=>{
    return{
      type:types.GET_CITY,
      city
    }
  }


