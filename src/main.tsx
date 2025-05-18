import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import Ragester from "./Compopentsmanual/Ragester"
import Forgotpassword from "./Compopentsmanual/Forgotpassword"
import Login from "./Compopentsmanual/Login"
 import Page from "./Compopentsmanual/Sidebar"
 import Map from './Compopentsmanual/Map'
 
 import {  BrowserRouter as Router, Route,Routes } from 'react-router-dom'
 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
    <Routes>
      {/* <Route path="/" element={<Login/>}/> */}
      <Route path='/' element={<Page/>}/>
        <Route path='/Login' element={<Login/>}/>
      <Route path ="/ragester" element ={<Ragester/>}/>
        <Route path ="/Forgotpassword" element ={<Forgotpassword/>}/>


    </Routes>
  
    </Router>

<Map/>
    
  </StrictMode>,
)
