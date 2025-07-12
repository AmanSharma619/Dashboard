import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard } from 'lucide-react';
import { UseFirebase } from '../firebase';
//Name Changed to login.jsx from Login.jsx
const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firebase = UseFirebase();
    const [error, setError] = useState(null);

    const Navigate = useNavigate();
    console.log(firebase.user);
    
    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null); // clear previous error
        try {
            await firebase.signupUserWithEmailAndPassword(email, password);
            Navigate('/dashboard');
        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    };
    const handleSignIn = async (e) => {
        e.preventDefault();
        console.log(email, password)
        setError(null);
        try {
            await firebase.signinUserWithEmailAndPassword(email, password);
            Navigate('/dashboard');
        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    };

    return (
        <div className='w-screen h-screen flex bg-gray-200 items-center justify-center bg-gradient-to-br from-purple-900 via-black to-fuchsia-900'>
            <div className="container h-[90%] w-[90%] bg-white rounded-4xl flex p-2 border-0 border-fuchsia-500">
                <div className="left w-1/2 flex flex-col justify-center items-center">
                    {isSignUp == false ? (<div className="left-subdiv w-[85%] h-[85%]  flex flex-col justify-evenly">
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
                                    {error && (
                                        <p className="text-red-600 text-sm font-medium mt-2">{error}</p>
                                    )}
                                    <input type="text" className=' p-1 w-[50%] h-[40px] rounded-lg border-2 border-gray-400' placeholder='Email' onChange={e => setEmail(e.target.value)} />
                                    <input type="password" className='p-1 w-[50%] h-[40px] rounded-lg border-2 border-gray-400' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                                        <button className='text-xl bg-purple-600 w-[100px] text-white font-bold p-2 rounded-lg' onClick={handleSignIn}>Sign In</button>
                                </form>
                            </div>
                            <div className='text-gray-700 flex gap-1'>
                                <h2>Don't have an account?</h2>
                                <h2 className="font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent cursor-pointer" onClick={() => setIsSignUp(true)}>Sign Up</h2>

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
                                    {error && (
                                        <p className="text-red-600 text-sm font-medium mt-2">{error}</p>
                                    )}
                                    <input type="text" className=' p-1 w-[50%] h-[40px] rounded-lg border-2 border-gray-400' placeholder='Name' />
                                    <input type="text" className=' p-1 w-[50%] h-[40px] rounded-lg border-2 border-gray-400' placeholder='Email' onChange={e => setEmail(e.target.value)} />
                                    <input type="password" className='p-1 w-[50%] h-[40px] rounded-lg border-2 border-gray-400' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                                    <button className='text-xl bg-purple-600 w-[100px] text-white font-bold p-2 rounded-lg' onClick={handleSignUp}>Sign Up</button>
                                </form>
                            </div>
                            <div className='text-gray-700 flex gap-1'>
                                <h2>Already have an account?</h2>
                                <h2 className="font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent cursor-pointer" onClick={() => setIsSignUp(false)}>Sign in</h2>

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