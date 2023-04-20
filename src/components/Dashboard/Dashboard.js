import React from 'react'
import './Dashboard.css'
import Chart from '../Chart/Chart'
import Pie from '../Pie/Pie'
import Table from '../Schedule/Schedule'
import { BsTags } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { TbUsers } from 'react-icons/tb'
import { BsBell } from 'react-icons/bs'
import {FaSearch} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'

function Dashboard() {






  return (
    // added flex-inline in the first className
    <div className='flex-inline ' style={{ margin: "2rem", marginLeft: "2rem", justifyContent: "space-between", width: "80vw", marginRight: "-6rem", flexWrap: "wrap" }}>
      <div className='1 flex-inline' style={{ marginBottom: "2rem" }}>

        <div style={{ fontWeight: "700", fontSize: "1.2rem" }}>Dashboard</div>

        <div className=' float-right flex justify-around'>

          {/*search box  */}
          <div className='mx-2 search-container '>
            <input type="text" placeholder="       Search..." className="search-input" />
            <FaSearch className="search-icon" />
          </div>

          <div className='mx-2'> <BsBell /> </div>

          <div className='profile mx-2'> <CgProfile/> </div>
        </div>

      </div>
      <div className='cards flex justify-between float-stretch' style={{ justifyContent: "space-between", flexWrap: "wrap", }}>

        <div className='child div1 flex' style={{ marginLeft: "0px" }}>
          <div className='font-bold' style={{ flex: "1", fontSize: "10px" }}>Total Revenues <legend style={{ fontWeight: "900", fontSize: "15px" }}>$2,129,430</legend> </div>
          <div className='flex justify-end' style={{ flex: "1", }}> <ion-icon name="cash"></ion-icon> </div>
        </div>


        <div className='child div2 flex' >
          <div className='font-bold' style={{ flex: "1", fontSize: "10px" }}>Total Transactions <legend style={{ fontWeight: "900", fontSize: "15px" }}>$2,129,430</legend> </div>
          <div className='flex justify-end' style={{ flex: "1" }}> <BsTags /> </div>
        </div>

        <div className='child div3 flex' >
          <div className='font-bold' style={{ flex: "1", fontSize: "10px" }}>Total Likes <legend style={{ fontWeight: "900", fontSize: "15px" }}>$2,129,430</legend> </div>
          <div className='flex justify-end' style={{ flex: "1", }}><AiOutlineLike /></div>
        </div>



        <div className='child div4 flex' style={{ marginRight: "0px" }}>
          <div className='font-bold' style={{ flex: "1", fontSize: "10px" }}>Total Users <legend style={{ fontWeight: "900", fontSize: "15px" }}>$2,129,430</legend> </div>
          <div className='flex justify-end' style={{ flex: "1", }}><TbUsers /></div> </div>
      </div>

      <div className='chart' style={{marginBottom:"-14px"}}>
        <Chart />
      </div>


      <div className='footer grid grid-cols-2 gap-12 justify-between' style={{}}>
        <Pie />
        <Table />
      </div>



    </div>
  )
}

export default Dashboard