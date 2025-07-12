import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard } from 'lucide-react';
import { UseFirebase } from '../firebase';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firebase = UseFirebase();
    const [error, setError] = useState(null);

    const Navigate = useNavigate();
    
    
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
        <div className='w-screen h-screen flex bg-gray-200 items-center justify-center bg-gradient-to-br from-purple-900 via-black to-fuchsia-900 p-2 sm:p-4'>
            <div className="container h-full sm:min-h-[90%] w-full sm:w-[90%] max-w-6xl bg-white rounded-lg sm:rounded-4xl flex flex-col lg:flex-row min-sm:overflow-hidden border-0 border-fuchsia-500">
                <div className="left w-full lg:w-1/2 flex flex-col justify-center items-center p-4 sm:p-6">
                    {isSignUp == false ? (<div className="left-subdiv w-full max-w-md flex flex-col justify-center gap-6 sm:gap-8">
                        <div className="flex items-center gap-2">
                            <LayoutDashboard size={24} color="#9211e8" strokeWidth={2.75} />
                            <h1 className='font-bold text-lg'>Dashboard</h1>
                        </div>
                        <div className='w-full flex flex-col gap-6 sm:gap-8'>
                            <div>
                                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Hello,</h1>
                                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Welcome Back</h1>
                                <h2 className='mt-2 text-sm sm:text-base text-gray-600'>Hey, Welcome back to your special place</h2>
                            </div>
                            <div className="formdiv w-full">
                                <form className='flex flex-col gap-4'>
                                    {error && (
                                        <p className="text-red-600 text-sm font-medium">{error}</p>
                                    )}
                                    <input 
                                        type="text" 
                                        className='p-3 w-full h-[48px] rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:outline-none transition-colors' 
                                        placeholder='Email' 
                                        value={email}
                                        onChange={e => setEmail(e.target.value)} 
                                    />
                                    <input 
                                        type="password" 
                                        className='p-3 w-full h-[48px] rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:outline-none transition-colors' 
                                        placeholder='Password' 
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    <button 
                                        className='text-lg bg-purple-600 hover:bg-purple-700 w-full sm:w-[120px] text-white font-bold p-3 rounded-lg transition-colors' 
                                        onClick={handleSignIn}
                                        type="submit"
                                    >
                                        Sign In
                                    </button>
                                </form>
                            </div>
                            <div className='text-gray-700 flex gap-1 text-sm sm:text-base'>
                                <h2>Don't have an account?</h2>
                                <h2 className="font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setIsSignUp(true)}>Sign Up</h2>
                            </div>
                        </div>
                    </div>) : (<div className="left-subdiv w-full max-w-md flex flex-col justify-center gap-6 sm:gap-8">
                        <div className="flex items-center gap-2">
                            <LayoutDashboard size={24} color="#9211e8" strokeWidth={2.75} />
                            <h1 className='font-bold text-lg'>Dashboard</h1>
                        </div>
                        <div className='w-full flex flex-col gap-6 sm:gap-8'>
                            <div>
                                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Hello,</h1>
                                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Create an Account</h1>
                                <h2 className='mt-2 text-sm sm:text-base text-gray-600'>Create your account to get started</h2>
                            </div>
                            <div className="formdiv w-full">
                                <form className='flex flex-col gap-4'>
                                    {error && (
                                        <p className="text-red-600 text-sm font-medium">{error}</p>
                                    )}
                                    <input 
                                        type="text" 
                                        className='p-3 w-full h-[48px] rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:outline-none transition-colors' 
                                        placeholder='Name' 
                                    />
                                    <input 
                                        type="text" 
                                        className='p-3 w-full h-[48px] rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:outline-none transition-colors' 
                                        placeholder='Email' 
                                        value={email}
                                        onChange={e => setEmail(e.target.value)} 
                                    />
                                    <input 
                                        type="password" 
                                        className='p-3 w-full h-[48px] rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:outline-none transition-colors' 
                                        placeholder='Password' 
                                        value={password}
                                        onChange={e => setPassword(e.target.value)} 
                                    />
                                    <button 
                                        className='text-lg bg-purple-600 hover:bg-purple-700 w-full sm:w-[120px] text-white font-bold p-3 rounded-lg transition-colors' 
                                        onClick={handleSignUp}
                                        type="submit"
                                    >
                                        Sign Up
                                    </button>
                                </form>
                            </div>
                            <div className='text-gray-700 flex gap-1 text-sm sm:text-base'>
                                <h2>Already have an account?</h2>
                                <h2 className="font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setIsSignUp(false)}>Sign in</h2>
                            </div>
                        </div>
                    </div>)}

                </div>
                <div className="right w-full lg:w-1/2 h-64 lg:h-auto relative order-first lg:order-last">
                    <img src="/loginImage.webp" className='w-full h-full object-cover rounded-t-lg lg:rounded-t-none lg:rounded-r-4xl' alt="Login background" />
                </div>
            </div>
        </div>
    )
}

export default Login