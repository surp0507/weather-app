import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function History() {
    const [name, setname] = useState("");
    const [speed, setspeed] = useState("");
    const [Deg, setdeg] = useState("");

    let data = localStorage.getItem("city")
    let data1 = localStorage.getItem("speed")
    let data2 = localStorage.getItem("deg")
   
    const showData=()=>{
      setname(data)
      setspeed(data1)
      setdeg(data2)
      let history= JSON.parse(localStorage.getItem("history"))
    }

  return (
    <div>
      <Button onClick={showData} className="btn-sm">show History </Button>
      <Link to="/">
        <Button className="mx-2 btn-sm">
          Logout
        </Button>
      </Link>
      <hr />
      <h3 className="text-center">history page</h3>
      <div classname="mx-auto">
        Name: <span>{name} </span> <br /> <br />
        Speed:<span>{speed}</span> <br /> <br />
        Deg:<span>{Deg} </span> <br /> <br />
      </div>
   </div>
  )
}
