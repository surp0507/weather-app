import { GET_HISTORY } from "../constants/ActionTypes";

const initialState={
    data:[]
}

 const historyReducer=(state = initialState,action)=>{
    switch(action.type){
      case GET_HISTORY:return{
        ...state,
        data:action.history
      }
      default:return state;
    }

}

export default historyReducer;