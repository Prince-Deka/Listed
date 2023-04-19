import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Legend } from 'recharts';
import './Chart.css'
const data = [
  {
    name: 'Week1',
    uv: 200,
    pv: 100,
    amt: 2400,
  },
  {
    name: 'Week2',
    uv: 350,
    pv: 410,
    amt: 2210,
  },
  {
    name: 'Week3',
    uv: 210,
    pv: 150,
    amt: 2290,
  },
  {
    name: 'Week4',
    uv: 450,
    pv: 210,
    amt: 2000,
  },
  {
    name: 'Week5',
    uv: 200,
    pv: 450,
    amt: 2000,
  },

];

const Chart = () => {


  const domainValues = data.map((item) => item.name);
  const yTicks = [...Array(9).keys()].map((i) => i * 50);

  return (
    <div className='container block'>
      <div className='block' style={{fontWeight:"700", marginTop:"1rem"}}> <div className='block'> <div> Activities </div> <div style={{marginTop:"-15px"}}> <small style={{color:"gray", fontSize:"9px"}}> May-June 2021 </small> </div></div></div>
      <div className='chrt' style={{
        width: "70vw",
        height: "40vh",
        marginTop:"3rem",
        marginLeft:"-6.5rem"
      }}>
        <ResponsiveContainer width="95%" height="80%">

          <LineChart width={100} height={100} data={data}>
            {yTicks.map((tick) => (
              <ReferenceLine y={tick * 2} stroke="#e0e0e0" strokeWidth={1} />
            ))}
            <YAxis domain={[0, 500]} axisLine={{ stroke: 'transparent' }} ticks={yTicks} />
            <XAxis dataKey="name" domain={domainValues} />
            <Line type="monotone" dataKey="pv" oke="#8884d8" stroke='blue' strokeWidth={3} />
            <Line type="monotone" dataKey="uv" oke="#4ecb71" stroke='#9bdd7c' strokeWidth={3} />

          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

  );

}

export default Chart;
