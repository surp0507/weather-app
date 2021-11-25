import React from 'react'
import {useNavigate} from 'react-router-dom';
import {Button,Modal} from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { loginAction,getUsername,getPassword } from '../actions';




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



  const loginValidation=(ausername,apassword)=>{
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
        <h2  className="text-center">Weather-API</h2>
        <hr />
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Login Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mx-auto"> 
          <input 
            type="text" 
            placeholder="username" 
            className="my-3" 
            onChange={(e)=>dispatch(getUsername(e.target.value))}
          />
          <input 
            type="text" 
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
