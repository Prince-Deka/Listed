import React from 'react'
import './Login.css'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'
import { useState } from 'react'
import {
 
    useNavigate,
  
} from "react-router-dom";


function Login() {

    const [email, setEmail] = useState("a@a.com");
    const [password, setPassword] = useState("a");
  
    const navigate = useNavigate();



    const handleSubmit = async () => {
        if (email === "admin@admin.com" && password === "admin") {
            navigate("/home");
            return;
        }
        else{
            alert(`Since the site is in developement phase, use credentials as\n email: admin@admin.com\n password: admin`)
            // setUsername('admin@admin.com')
            // setPassword('admin')
            
        }
    }





    return (
        <div className='flex my-2 justify-center' style={{ width: "100vw", height: "100vh", margin: "0" }}>



            <div className=' left monserrat-7 flex flex-2 items-center justify-center w-full'> <h1 style={{ fontSize: "50px" }}>Board.</h1> </div>

            <div className=' right flex-9 items-center' style={{}}>

                <div className='' style={{ justifyContent: "center", margin: "200px 120px" }}>

                    {/* title div */}
                    <div className='my-2'><h1 className=' monserrat-7' style={{ fontSize: "30px" }}>Sign in</h1><legend> <small> Sign in to your account </small></legend></div>

                    <div className='flex gap-5'>

                        <div className="flex flex1 bg-white justify-center py-1" style={{ paddingLeft: "20px", paddingRight: "20px", borderRadius: "15px" }}> <FcGoogle style={{ fontSize: "26px" }} /> <input type="text" disabled value="    Sign in with google" /></div>
                        <div className="flex flex1 bg-white justify-center py-1" style={{ paddingLeft: "20px", paddingRight: "20px", borderRadius: "15px" }}><AiFillApple style={{ fontSize: "26px" }} />  <input type="text" disabled value="    Sign in with google" /></div>
                    </div>

                    <div className='form py-2 my-2' style={{ backgroundColor: "white", borderRadius: "15px" }}>
                        <form action="">

                            <div className='block '>

                                {/* email div */}
                                <div className='grid mx-3' >
                                    <label htmlFor="name">Email Address</label>
                                    <input type="email" name='email' id='email' style={{ borderRadius: "6px", backgroundColor: "#e0d7d7", textAlign: "center" }} placeholder='email address' onChange={(e) => setEmail(e.target.value)} autoFocus/>
                                </div>

                                {/* password div */}
                                <div className='grid mx-3 lato-4'>
                                    <label htmlFor="name">Password</label>
                                    <input type="password" name='password' style={{ borderRadius: "6px", backgroundColor: "#e0d7d7", textAlign: "center" }} placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
                                </div>

                                {/* forgot password div */}
                                <div className='forgot-pswrd mx-3 my-2 lato-4 text-blue-600'>Forgot password?</div>


                                {/* button div */}
                                <div className='btn flex justify-center'>
                                    <button className='bg-stone-950 text-white w-11/12 items-center py-1 ' style={{ borderRadius: "10px" }} onClick={handleSubmit}>Sign In</button>
                                </div>

                                {/* register div */}
                                <div className='register flex justify-center my-2'>
                                    Don't have an account? <span className='text-blue-600'> Register here</span>
                                </div>

                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login