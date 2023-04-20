import React from 'react'
import './Sidebar.css'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BsTags} from 'react-icons/bs'
import {AiOutlineSetting} from 'react-icons/ai'
import {TbUsers} from 'react-icons/tb'
import {AiOutlineSchedule} from 'react-icons/ai'



function Sidebar() {
    const montserrat = {
       " font-family" : "'Montserrat', sans-serif",
       " fontWeight": "700",
    }
    return (
        <div className='sidebar flex flex-column ' style={{paddingRight:"2.5rem"}}>
            <div className=' text-white  justify-items-center' >
                <div className={`title font-bold text-3xl ${montserrat}`} style={{}}><h1> Board.</h1></div>
                <div className='submenus align-items-center space-between space-y-2 ' style={{ marginLeft: "2rem", marginTop: "-7.5rem", fontFamily: "'Montserrat', sans-serif", fontSize: "1rem" }}>
                    <div className='submenu1 text-white flex items-center ' style={{fontWeight:"700"}} ><AiOutlinePieChart /><span>Dashboard</span></div>
                    <div className='submenu1 text-white flex items-center'>  <BsTags/><span>Transactions</span></div>
                    <div className='submenu1 text-white flex items-center' ><AiOutlineSchedule/><span>Schedules</span></div>
                    <div className='submenu1 text-white flex items-center' > <TbUsers/> <span>Users</span></div>
                    <div className='submenu1 text-white flex items-center'> <AiOutlineSetting/> <h3>Settings</h3></div>


                    {/* bottom part */}
                    <div className='font-thin flex-inline' style={{marginTop:"20rem", fontSize:"12px",}}>
                        <h5>Help</h5>
                        <h4>Contact Us</h4>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Sidebar