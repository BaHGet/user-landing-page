'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

import styles from './loginPage.module.css'
import LoginBtn from "./LoginBtn"

const Login = () => {
  const [hidden, setHidden] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e: any) => {
    e.preventDefault()
    if(email==='test@task.com' && password==='12345678') {
        router.push('/profile');
    }
}

  return (
    <div className="w-1/3 md:w-5/6 p-5 my-56 flex flex-col items-center">
      <Image 
        src="https://images.wuzzuf-data.net/files/company_logo/73584739363d3b2daf23db.png" 
        alt="Vercel Logo" width="300" height="300"
      />
      <form className="w-2/3 h-2/3 flex flex-col justify-center p-5 ">
        <label>Email Address</label>
        <input type="text" name="email" 
          value={email} onChange={handleEmailChange} 
          placeholder="name@example.com" 
          className="h-1/6 mb-16 border border-gray-400 rounded-lg p-3" 
        />  

        <label>Password</label>
        <input id="passwordInput" type={hidden ? "password" : "text"} 
          value={password} onChange={handlePasswordChange} 
          name="password" placeholder="********" autoComplete="off" 
          className="h-1/6 mb-2 border border-gray-400 rounded-lg p-3"  
        />  
        

        <button id={styles.togglePassword} type="button" onClick={() => setHidden(!hidden)}>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.53 9.97L9.47004 15.03C8.82004 14.38 8.42004 13.49 8.42004 12.5C8.42004 10.52 10.02 8.92 12 8.92C12.99 8.92 13.88 9.32 14.53 9.97Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.82 6.27C16.07 4.95 14.07 4.23 12 4.23C8.46997 4.23 5.17997 6.31 2.88997 9.91C1.98997 11.32 1.98997 13.69 2.88997 15.1C3.67997 16.34 4.59997 17.41 5.59997 18.27" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.42004 20.03C9.56004 20.51 10.77 20.77 12 20.77C15.53 20.77 18.82 18.69 21.11 15.09C22.01 13.68 22.01 11.31 21.11 9.9C20.78 9.38 20.42 8.89 20.05 8.43" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.5099 13.2C15.2499 14.61 14.0999 15.76 12.6899 16.02" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.47 15.03L2 22.5" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2.5L14.53 9.97" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <LoginBtn handleLogin={handleLogin} />
      </form>
    </div>
  )
}

export default Login