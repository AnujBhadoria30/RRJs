import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
 <>
 <div>
 <ul className="flex justify-between items-center px-4  rounded-2xl h-14 bg-slate-200 text-gray-800 sm:border-2 border-red-400 lg:border-none">
       <Link to="/">Home</Link> 
       <Link to="/contact">Contact</Link> 
       <Link to="/help">Help</Link> 
    </ul>
 </div>
 </>
  )
}

export default Header
