import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layer() {
  return (
  <>
  <Header/>
  <div className='p-4'>
  <Outlet/>
  </div>
  </>
  )
}

export default Layer
