'use client';

import Image from "next/image"
import { useRouter } from "next/navigation";
import { useState } from "react";

import Form from "../Components/Form";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Login = () => {
  const [error, setError] = useState('')
  const [signed, setSigned] = useLocalStorage('signed', 'false')
  const router = useRouter()

  const handleLogin = async(formData: FormData) => {
    const email = formData.get('email')
    const password = formData.get('password')
    if(!email || !password) return setError('All fields are required')
    const res = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const data = await res.json()
    if(data.authentication) {
      setSigned('true')
      return router.push('/profile')
    }else{
      setSigned('false')
      setError(data.error)
    }
  }

  return (
    <div className="w-1/3 md:w-5/6 p-5 my-56 flex flex-col items-center">
      <Image 
        src="https://images.wuzzuf-data.net/files/company_logo/73584739363d3b2daf23db.png" 
        alt="Cyprata Logo" width="300" height="300" priority
      />
      <Form handleLogin={handleLogin} error={error} setError={setError} />
    </div>
  )
}

export default Login