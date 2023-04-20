import './App.css';
// 488px
import Home from './components/Home';
import Login from './components/Login/Login';
import {
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const innerleft = {
    width: "30rem",
    height: "39rem",
    left: "0px",
    top: "0px",

    background: "#000000",
  }
  // 852px
  const innerright = {
    position: "absolute",
    width: "70rem",
    height: "39rem",
    left: "588px",
    top: "0px",
  }
  return (

    // <div className=" flex flex-wrap justify-center my-20 ">
    // <Home/>
    // </div>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Routes>

  );
}

export default App;
