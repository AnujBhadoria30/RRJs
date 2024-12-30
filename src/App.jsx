/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layer from './Component/Layer'
import About from './Component/about'
import Contact from './Component/Contact'
import Help from './Component/Help'
import Body from './Component/Body'

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Layer/>}>
  <Route index element={<Body/>} />
  <Route path='about' element={<About/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='help' element={<Help/>}/>
  
  </Route>

 </Routes>
 </BrowserRouter>
  )
}

export default App
