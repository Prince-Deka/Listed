import React from 'react'
import './Schedule.css'


function Table() {
  const colors = [
    {
      key:1,
      clr:"green",
      item:"Basic Tees",
      time:"14.00-15.00"
    },
    {
      key:2,
      clr:"blue",
      item:"Custom Short Pants",
      time:"18.00-20.00"
    }

  ]
  return (
    <div className=' main grid grid-cols-1 bg-white'>

      <div className='ml-10'>
        <div>
          <h1>Schedule</h1>
        </div>

        <div>
          <ul className='listwrap'>
            {colors.map((c) => (

              <li className='listitem my-2' key={c.key} style={{borderColor:`${c.clr}` }}>  <b> {c.item} </b> <legend style={{fontSize:"9px", fontWeight:"900"}}><small>{c.time}</small></legend></li>
            ))}


        
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Table