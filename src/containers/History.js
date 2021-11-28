import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function History() {
  const newHistory=JSON.parse(localStorage.getItem("history"));

  return (
    <div>
      <Link to="/">
        <Button className="mx-2 btn-sm">
          Logout
        </Button>
      </Link>
      <hr />
      <h3 className="text-center">history page</h3> 
      <hr/>
      <div classname="mx-auto">
        {
        newHistory.map(item=>(
          <>
            <div className="text-center">
              Name: <span>{item.name}</span> <br/>
              Speed: <span>{item.speed}</span><br/>
              Deg: <span>{item.deg}</span><br/>
              time:<span>{item.time}</span>
            </div>
            <hr/>
          </>
           ))
            }
      </div>
   </div>
  )
}
