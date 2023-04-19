import React from 'react';
import './Pie.css'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';



const Example = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group D', value: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#e87fd4'];

    return (
        <div className=' main grid grid-cols-1 bg-white'>
            <div className='ml-12 my-1'><h3>Top Products</h3></div>

            <div className='grid grid-cols-2 gap-12 space-between'>

                <ResponsiveContainer width="100%" height="80%">
                    <PieChart width={400} height={400}>
                        <Pie

                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}

                            outerRadius={30}
                            fill="#8884d8"
                            dataKey="value"
                            stroke='none'
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div>
                    <ul>
                        <li style={{fontSize:"9px"}}>  <b> Basic Tees </b><legend><small>55%</small></legend></li>
                        <li style={{fontSize:"9px"}}> <b> Custom Short Pants </b><legend><small>31%</small></legend></li>
                        <li style={{fontSize:"9px"}}> <b> Super Hoodies </b><legend><small>14%</small></legend></li>
                        <li></li>
                        <li></li>
                    </ul>
                       
                </div>


            </div>
        </div>




    );
};

export default Example;
