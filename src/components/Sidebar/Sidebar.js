import React from 'react'
import './Sidebar.css'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BsTags} from 'react-icons/bs'
import {GrSchedules} from 'react-icons/gr'



function Sidebar() {
    const montserrat = {
       " font-family" : "'Montserrat', sans-serif",
       " fontWeight": "700",
    }
    return (
        <div className='sidebar flex flex-column ' style={{paddingRight:"40px"}}>
            <div className=' text-white  justify-items-center' >
                <div className={`title font-bold text-3xl ${montserrat}`} style={{ }}><h1>Board.</h1></div>
                <div className='submenus align-items-center space-between space-y-2 ' style={{ marginLeft: "2rem", marginTop: "-7.5rem", fontFamily: "'Montserrat', sans-serif", fontSize: "1rem" }}>
                    <div className='submenu1 text-white flex items-center' ><AiOutlinePieChart /><span>Dashboard</span></div>
                    <div className='submenu1 text-white flex items-center'>  <BsTags/><span>Transactions</span></div>
                    <div className='submenu1 text-white flex items-center' ><GrSchedules/><span>Schedules</span></div>
                    <div className='submenu1 text-white flex-stretch items-center' > <BsTags/> <span>Users</span></div>
                    <div className='submenu1 text-white items-center'><h3>Settings</h3></div>


                    {/* bottom part */}
                    <div className='font-thin' style={{marginTop:"12rem", fontSize:"12px",}}>
                        <h5>Help</h5>
                        <h4>Contact Us</h4>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Sidebar