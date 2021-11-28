import { GET_HISTORY } from "../constants/ActionTypes";

const initialState={
    history:[]
}

 const historyReducer=(state = initialState,action)=>{
    switch(action.type){
      case GET_HISTORY:return{
        ...state,
        history:action.history
      }
      default:return state;
    }

}

export default historyReducer;