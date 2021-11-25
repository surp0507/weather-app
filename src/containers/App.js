import React from 'react'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import Login from './Login'
import Hitory from './History'
import Dashboard from '../components/Dashboard'


const App = () => (
  <div>
    <BrowserRouter>
     <Routes> 
       <Route path="/" element={<Login/>}/>
       <Route path="/history" element={<Hitory/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
     </Routes>
    </BrowserRouter>
  </div>
)

export default App
