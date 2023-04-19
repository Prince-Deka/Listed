import React from 'react'
import './Dashboard.css'
import Chart from '../Chart/Chart'
import Pie from '../Pie/Pie'
import Table from '../Schedule/Schedule'


function Dashboard() {




  const widgets = [
    {
      title: "Total Transactions"
    }
  ]

  return (
    // added flex-inline in the first className
    <div className='flex-inline ' style={{ margin: "2rem", marginLeft: "2rem", justifyContent: "space-between", width: "80vw", marginRight: "-6rem", flexWrap: "wrap" }}>
      <div className='1 flex-inline' style={{ marginBottom: "2rem" }}>
        <div style={{ fontWeight: "700", fontSize: "1.2rem" }}>Dashboard</div>
        <div className='right float-right flex justify-around'>
          <div className='mx-2 '><input type="search" style={{ border: "0.001rem solid gray", borderRadius: "0.625rem", paddingLeft: "20px", paddingRight: "-2rem" }} placeholder='Search...' /></div>
          <div className='mx-2'> alert </div>
          <div className='profile mx-2'>profile</div>
        </div>

      </div>
      <div className='cards flex justify-between float-stretch' style={{ justifyContent: "space-between", flexWrap: "wrap", }}>

        <div className='child div1 flex' style={{ marginLeft: "0px" }}>
          <div className='font-bold' style={{ flex: "1", fontSize: "10px" }}>Total Revenues <legend style={{ fontWeight: "900", fontSize: "15px" }}>$2,129,430</legend> </div>
          <div style={{ flex: "1", }}> <ion-icon name="cash"></ion-icon> </div>
        </div>


        <div className='child div2 flex' > <div className='font-bold' style={{ flex: "1", fontSize: "10px" }}>Total Revenues <legend style={{ fontWeight: "900", fontSize: "15px" }}>$2,129,430</legend> </div> <div style={{ flex: "1", }}>fadafadf</div> </div>
        <div className='child div3 flex' > <div className='font-bold' style={{ flex: "1", fontSize: "10px" }}>Total Revenues <legend style={{ fontWeight: "900", fontSize: "15px" }}>$2,129,430</legend> </div> <div style={{ flex: "1", }}>fadafadf</div> </div>
        <div className='child div4 flex' style={{ marginRight: "0px" }}> <div className='font-bold' style={{ flex: "1", fontSize: "10px" }}>Total Revenues <legend style={{ fontWeight: "900", fontSize: "15px" }}>$2,129,430</legend> </div> <div style={{ flex: "1", }}>fadafadf</div> </div>
      </div>
      <div className='chart'>

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