'use client'

import React, { useState } from 'react'
import LoginBtn from '../login/LoginBtn'
import styles from '../styles/loginPage.module.css'
import { useLocalStorage} from '../hooks/useLocalStorage'
import Link from 'next/link'

type Props = {
    handleLogin : (e: any) => void
    error : string
    setError : (input : string) => void
}

const Form = ({ handleLogin, error, setError } : Props) => {
    const [hidden, setHidden] = useState<boolean>(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user] = useLocalStorage('user')


    const handleEmailChange = (e: any) => {
        setEmail(e.target.value)
        setError('')
    }

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value)
        setError('')
    }

    const handleLogout = (key:string) => {
        localStorage.removeItem(key)
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        localStorage.setItem('signed', 'false')
        window.location.reload()
    }

    return (
        user ? 
            <>
                <h1 className="text-3xl my-5">You are already logged in</h1>
                <div className='flex flex-row w-60 p-4 justify-between'>
                    <Link href="/profile" className='text-gray-300 bg-slate-700 rounded-lg p-2'>View Profile</Link>
                    <button className='text-gray-300 bg-slate-700 rounded-lg p-2' onClick={() => handleLogout('user')}>Logout</button>
                </div>
            </> 
        : 
            <form action={handleLogin} className="w-2/3 h-2/3 flex flex-col justify-center p-5 ">
                <label>Email Address</label>
                <input type="text" name="email" 
                    value={email} onChange={handleEmailChange} 
                    placeholder="name@example.com" 
                    className="h-1/6 mb-8 border border-gray-400 rounded-lg p-3" 
                />  
                {
                    error==='User Not Found' && <p className="text-red-500 mb-5">{error}</p>
                }
                <label>Password</label>
                <input id="passwordInput" type={hidden ? "password" : "text"} 
                    value={password} onChange={handlePasswordChange} 
                    name="password" placeholder="********" autoComplete="off" 
                    className="h-1/6 mb-2 border border-gray-400 rounded-lg p-3"  
                />  
                {
                    error !=='User Not Found' && <p className="text-red-500 mb-5">{error}</p>
                }
                <button id={styles.togglePassword} type="button" onClick={() => setHidden(!hidden)}>
                    {
                        hidden ? 
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.53 9.97L9.47004 15.03C8.82004 14.38 8.42004 13.49 8.42004 12.5C8.42004 10.52 10.02 8.92 12 8.92C12.99 8.92 13.88 9.32 14.53 9.97Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17.82 6.27C16.07 4.95 14.07 4.23 12 4.23C8.46997 4.23 5.17997 6.31 2.88997 9.91C1.98997 11.32 1.98997 13.69 2.88997 15.1C3.67997 16.34 4.59997 17.41 5.59997 18.27" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.42004 20.03C9.56004 20.51 10.77 20.77 12 20.77C15.53 20.77 18.82 18.69 21.11 15.09C22.01 13.68 22.01 11.31 21.11 9.9C20.78 9.38 20.42 8.89 20.05 8.43" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.5099 13.2C15.2499 14.61 14.0999 15.76 12.6899 16.02" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.47 15.03L2 22.5" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22 2.5L14.53 9.97" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24" height="25" viewBox="0 0 256 256">
                            <path d="M243.65527,126.37561c-.33886-.7627-8.51172-18.8916-26.82715-37.208-16.957-16.96-46.13281-37.17578-88.82812-37.17578S56.12891,72.20764,39.17188,89.1676c-18.31543,18.31641-26.48829,36.44531-26.82715,37.208a3.9975,3.9975,0,0,0,0,3.249c.33886.7627,8.51269,18.88672,26.82715,37.19922,16.957,16.95606,46.13378,37.168,88.82812,37.168s71.87109-20.21191,88.82812-37.168c18.31446-18.3125,26.48829-36.43652,26.82715-37.19922A3.9975,3.9975,0,0,0,243.65527,126.37561Zm-32.6914,34.999C187.88965,184.34534,159.97656,195.99182,128,195.99182s-59.88965-11.64648-82.96387-34.61719a135.65932,135.65932,0,0,1-24.59277-33.375A135.63241,135.63241,0,0,1,45.03711,94.61584C68.11133,71.64123,96.02344,59.99182,128,59.99182s59.88867,11.64941,82.96289,34.624a135.65273,135.65273,0,0,1,24.59375,33.38379A135.62168,135.62168,0,0,1,210.96387,161.37463ZM128,84.00061a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84.00061Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164.00061Z"/>
                        </svg>
                    }
                    
                </button>
                <LoginBtn />
            </form>
    )
}

export default Form