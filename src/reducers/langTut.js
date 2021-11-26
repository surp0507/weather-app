
import { GET_LANG } from "../constants/ActionTypes";
import { GET_LONG } from "../constants/ActionTypes";

  const initialState={
    lang:"",
    long:""
}
const langTut=(state=initialState,action)=>{
    switch(action.type)
    {
        case GET_LANG:return{
            ...state,
            lang:action.lang
        }

        case GET_LONG:return{
            ...state,
            lang:action.long
        }
        default:return state;
      }
   }
   export default langTut;