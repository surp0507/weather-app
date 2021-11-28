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
    const history=useSelector(state=>state.historyReducer.history)
    const cityname=useSelector(state=>state.weatherReducer.cityName)
    const dispatch=useDispatch();

   useEffect(()=>{
      localStorage.setItem("history",JSON.stringify(history))
    },[history])
    
    const submit=()=>{
      dispatch(getWeather(cityname));
      weather.map(ele=>{
        dispatch(getHistory([...history,{name:ele.name,speed:ele.wind.speed,deg:ele.wind.deg,time:new Date()}]));
      })
      
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
           id:<span> {item.id}</span>
           <hr/>
         </div>
       </>
  
     ))}
  </>
 )
}






