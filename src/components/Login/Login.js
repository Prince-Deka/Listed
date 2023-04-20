import React from 'react'
import './Login.css'
function Login() {
    return (
        <div className='flex my-2 justify-center' style={{ width: "100vw", height: "100vh", margin: "0" }}>

            <div className=' left flex flex-2 items-center justify-center w-full' style={{}}> <h1>Board.</h1> </div>

            <div className=' right flex-9 items-center' style={{}}>

                <div className='' style={{ border: "2px solid black", justifyContent: "center", margin: "200px 120px" }}>

                    <h1>Sign in</h1><legend>Sign in to your account</legend>

                    <div className='flex gap-5'>
                        <div className="flex flex1"><input type="text" /></div>
                        <div className="flex flex1"><input type="text" /></div>
                    </div>

                    <div className='form py-2 my-2' style={{border:"2px solid red"}}>
                        <form action="">

                            <div className='block'>

                                {/* email div */}
                                <div className='grid mx-3'>
                                    <label htmlFor="name">Email Address</label>
                                    <input type="email" name='email' />
                                </div>

                                {/* password div */}
                                <div className='grid mx-3'>
                                    <label htmlFor="name">Password</label>
                                    <input type="password" name='password' />
                                </div>

                                {/* forgot password div */}
                                <div className='forgot-pswrd mx-3 my-2'>fa</div>


                                {/* button div */}
                                <div className='btn flex justify-center'>
                                    <button className='bg-stone-950 text-white w-11/12 items-center' >Sign In</button>
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