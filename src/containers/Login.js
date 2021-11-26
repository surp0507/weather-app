import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import {Button,Modal} from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { loginAction,getUsername,getPassword, getHistory } from '../actions';
import { logData } from '../actions';
import { getLangitute,getLongitute } from '../actions';


export default function Login() {

 
  let navigate=useNavigate()
  const show=useSelector(state=>state.loginReducer.show)
  const username=useSelector(state=>state.loginReducer.username)
  const password=useSelector(state=>state.loginReducer.password)
  const users=useSelector(state=>state.loginReducer.users)

  const dispatch=useDispatch();


  const handleClose = () => {
    dispatch(loginAction(false));
  }
  const handleShow = () => {
    dispatch(loginAction(true));
  }

  useEffect(()=>{
    dispatch(logData())
  },[])

const getLocation=()=>{
  if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(showPosition);

  }

}
const showPosition=(position)=>{
  dispatch(getLangitute(position.coords.latitude))
  dispatch(getLongitute(position.coords.longitude))
 }

 const loginValidation=(ausername,apassword)=>{
   getLocation();
   if(username===ausername && password===apassword){
   navigate("/dashboard")
  }
  else{
    alert("incorrect")
    handleClose();
  }
  }

  return (
    <div>
      <h2  className="text-center my-3">Weather-API</h2>
      <hr />
      <Button variant="primary" onClick={handleShow} className="btn">
        Login
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <h4>Login Page</h4>
        </Modal.Header>
        <Modal.Body>
          <div className="mx-auto"> 
            <input 
              type="text" 
              className="mx-5 my-2 text-center"
              placeholder="username" 
              onChange={(e)=>dispatch(getUsername(e.target.value))}
            />
            <input 
              type="password" 
              className="mx-5 text-center"
              placeholder="password"  
              onChange={(e)=>dispatch(getPassword(e.target.value))}
            />
          </div>
          </Modal.Body>
            <Modal.Footer>
             <Button variant="secondary" onClick={handleClose}>
              Close
             </Button>
             {users.map((item)=>(
               <>
                <Button 
                  variant="primary" 
                  onClick={()=>loginValidation(item.username,item.password)}>
                  Login
               </Button>
              </>
                ))}
            </Modal.Footer>
          </Modal>
       </div>
      )
    }
