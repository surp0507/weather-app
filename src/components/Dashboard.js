import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';                                                                                                                                                                           
import {Button} from 'react-bootstrap'
import { getCityName } from '../actions';
import { useSelector,useDispatch } from 'react-redux';
import getWeather from '../thunk/getWeather'
import { useNavigate } from 'react-router-dom';
import { getHistory } from '../actions';


  export default function Dashboard() {
    const navigate=useNavigate()
    const weather=useSelector(state=>state.weatherReducer.weather)
    const lang=useSelector(state=>state.langTut.lang)
    const long=useSelector(state=>state.langTut.long)
    console.log(lang)
    console.log(long)
    const history=useSelector(state=>state.historyReducer.data)
    console.log(weather);
    const cityname=useSelector(state=>state.weatherReducer.cityName)
    const dispatch=useDispatch();


    useEffect(()=>{

   localStorage.setItem("history",JSON.stringify(history))

    },[])
    const submit=()=>{
      dispatch(getWeather(cityname));
    }

    const historyPage=()=>{
      navigate("/history")
    }

  return (
   <>
    <Link to="/dashboard">
      <Button className="mx-1 my-2 btn-sm">
        Dashboard
      </Button>
    </Link> 
    <Button onClick={historyPage} className="mx-2 btn-sm">history</Button>
    <Link to="/">
      <Button className="mx-2 btn-sm">
         Logout
      </Button>
    </Link>  
     <hr />
     <input type="text" 
       name="search" className=",mx-3"
       onChange={(e)=>dispatch(getCityName(e.target.value))}
     />
     <Button onClick={submit} className="mx-1 btn btn-sm">search</Button>
     <hr/>
     {weather.map(item=>(

       <>
         <div className="text-center my-5">
           <hr/>
           Name:<span key={item.id}>{item.name}</span> <br/><br/>
           Speed:<span >{item.wind.speed}</span><br/><br/>   
           Deg:<span>{item.wind.deg}</span><br/><br/>
           {

             weather.map((ele=>{
            const arr=JSON.parse(localStorage.getItem("history"))
              console.log(arr)
              localStorage.setItem("arr",JSON.stringify(arr))
             }))
            }
          <hr/>
         </div>
       </>
       
     ))}
  </>
 )
}






