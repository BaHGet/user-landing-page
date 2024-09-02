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

  const mimicApiCall = (email: any, password: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@task.com' && password === '12345678') {
          resolve({ authentication: true });
        } else if (email !== 'test@task.com') {
          reject({ authentication: false, error: 'User Not Found' });
        } else if (password !== '12345678') {
          reject({ authentication: false, error: 'Wrong Password' });
        } else {
          reject({ authentication: false, error: 'Internal Error' });
        }
      }, 1000)
    })
  }
  
  const handleLogin = async(formData: FormData) => {
    const email = formData.get('email')
    const password = formData.get('password')

    if(!email || !password) return setError('All fields are required')

    try {
      const data: any = await mimicApiCall(email, password)
      
      if(await data?.authentication) {
        setSigned('true')
        return router.push('/profile')
      }
    } catch (error : any) {
      setSigned('false')
      setError(error.error)
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