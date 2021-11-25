import React, { useState } from 'react'
import {useEffect} from 'react'
import {Button} from 'react-bootstrap'
import { getCityName } from '../actions';
import { useSelector,useDispatch } from 'react-redux';
import axios from "axios";
import { weatherAction } from "../actions";


  export default function Dashboard() {
    const weather=useSelector(state=>state.weatherReducer.weather)
    const cityname=useSelector(state=>state.weatherReducer.cityName)

    const dispatch=useDispatch();

 


    const reqestData=async ()=>{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=dd52c7c22569a6cf7a6a6caf51b7a52c`);
      dispatch(weatherAction(response.data))
      console.log(weather)
      }
      

  useEffect(() => {
    reqestData();
     }, [])

     const submit=()=>{
       console.log(cityname)

     }

 

 
 return (
      <>
   <input type="text" 
   name="search" className="mx-3"
   onChange={(e)=>dispatch(getCityName(e.target.value))}
   />
   <Button onClick={submit} className="mx-1 btn btn-sm">search</Button>

   {[weather].map((data)=>(
     <>
     <li key={data.id}>{data.name}</li>
     <li key={data.id} >{data.temp}</li>
     <li>{data.press}</li>
     </>
   ))}
      </>
    )
}






