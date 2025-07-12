import React , {useEffect,useState}from 'react'
import { Link } from 'react-router-dom';
import { LayoutDashboard } from 'lucide-react';
const Login = () => {
    const [isSignUp,setIsSignUp] = useState(false);
    return (
        <div className='w-screen h-screen flex bg-gray-200 items-center justify-center bg-gradient-to-br from-purple-900 via-black to-fuchsia-900'>
            <div className="container h-[90%] w-[90%] bg-white rounded-4xl flex p-2 border-0 border-fuchsia-500">
                <div className="left w-1/2 flex flex-col justify-center items-center">
                {isSignUp ==false ? (<div className="left-subdiv w-[85%] h-[85%]  flex flex-col justify-evenly">
                        <div>
                        <LayoutDashboard size={28} color="#9211e8" strokeWidth={2.75} />
                        <h1 className='font-bold '>Dashboard</h1>
                        </div>
                        <div className='w-full h-[70%] flex flex-col justify-between '>
                            <span >
                                <h1 className='text-5xl font-bold '>Hello,</h1>
                                <h1 className='text-5xl font-bold '>Welcome Back</h1>
                                <h2 className='mt-2'>Hey, Welcome back to your special place</h2>
                            </span>
                            <div className="formdiv w-full">
                                <form className='flex flex-col gap-4' >
                                    <input type="text" className=' p-1 w-[50%] h-[40px] rounded-lg border-2 border-gray-400' placeholder='Email' />
                                    <input type="password" className='p-1 w-[50%] h-[40px] rounded-lg border-2 border-gray-400' placeholder='Password' />
                                    <Link to="/dashboard">
                                    <button className='text-xl bg-purple-600 w-[100px] text-white font-bold p-2 rounded-lg'>Sign In</button>
                                    </Link>
                                </form>
                            </div>
                            <div className='text-gray-700 flex gap-1'>
                                <h2>Don't have an account?</h2>
                              <h2 className="font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent cursor-pointer" onClick={()=>setIsSignUp(true)}>Sign Up</h2>

                            </div>
                        </div>
                    </div>) : (<div className="left-subdiv w-[85%] h-[85%]  flex flex-col justify-evenly">
                        <div>
                        <LayoutDashboard size={28} color="#9211e8" strokeWidth={2.75} />
                        <h1 className='font-bold '>Dashboard</h1>
                        </div>
                        <div className='w-full h-[70%] flex flex-col justify-between '>
                            <span >
                                <h1 className='text-5xl font-bold '>Hello,</h1>
                                <h1 className='text-5xl font-bold '>Create an Account</h1>
                                <h2 className='mt-2'>Create your account to get started</h2>
                            </span>
                            <div className="formdiv w-full">
                                <form className='flex flex-col gap-4' >
                                    <input type="text" className=' p-1 w-[50%] h-[40px] rounded-lg border-2 border-gray-400' placeholder='Name' />
                                    <input type="text" className=' p-1 w-[50%] h-[40px] rounded-lg border-2 border-gray-400' placeholder='Email' />
                                    <input type="password" className='p-1 w-[50%] h-[40px] rounded-lg border-2 border-gray-400' placeholder='Password' />
                                    <button className='text-xl bg-purple-600 w-[100px] text-white font-bold p-2 rounded-lg'>Sign Up</button>
                                </form>
                            </div>
                            <div className='text-gray-700 flex gap-1'>
                                <h2>Already have an account?</h2>
                              <h2 className="font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent cursor-pointer" onClick={()=>setIsSignUp(false)}>Sign in</h2>

                            </div>
                        </div>
                    </div>)}
                    
                </div>
                <div className="right w-1/2  relative">
                    <img src="/loginImage.webp" className='w-full h-full object-cover rounded-4xl' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login