import React from 'react'
import './Style.css'
import Sidebar from './Sidebar/Sidebar.js'
import Dashboard from './Dashboard/Dashboard'

function Home() {
  return (
    <div className='parent flex'>
      <div className='container flex basis-[12%] w-[90vw] h-[80vh] border'>
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  )
}

export default Home