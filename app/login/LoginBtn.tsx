'use client';

import React from 'react'

type Props = {
    handleLogin : (e: any) => void
}

const LoginBtn = ( {handleLogin} : Props) => {
    
    return (
        <button className="bg-[#262626] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => handleLogin(e)}>Login</button>
    )
}

export default LoginBtn