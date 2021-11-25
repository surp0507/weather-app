import { Link } from 'react-router-dom';

import {Button} from 'react-bootstrap'
import { getCityName } from '../actions';
import { useSelector,useDispatch } from 'react-redux';
import getWeather from '../thunk/getWeather'
import { useNavigate } from 'react-router-dom';


  export default function Dashboard() {
   const navigate=useNavigate()
   const weather=useSelector(state=>state.weatherReducer.weather)
   console.log(weather);
   const cityname=useSelector(state=>state.weatherReducer.cityName)
   const dispatch=useDispatch();

  const submit=()=>{
    dispatch(getWeather(cityname));
    localStorage.setItem("")
  }

  const historyPage=()=>{
    navigate("/history")
  }
 
return (
   <>
    <Link to="/dashboard">
      <Button className="mx-1 my-2 btn-sm">
        ashboard
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
         <div className="text-center">
           Name:<span key={item.id}>{item.name}</span> <br/><br/>
           Speed:<span >{item.wind.speed}</span><br/><br/>
           Deg:<span>{item.wind.deg}</span><br/><br/>
         </div>
       </>
     ))}
  </>
 )
}






