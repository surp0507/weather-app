import React from 'react'
import {Button,Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Logout() {
  return (
    <div>
      <div className="text-center">
        <Alert>You are LoggedIn</Alert>
      </div>
      <Link to="/dashboard"> Dashboard</Link>
      <Link to="/history"> History</Link>
      <hr />
      <Link to="/">
        <Button className="my-3">
          LogOut
        </Button>
      </Link> 
   </div>
  )
}
