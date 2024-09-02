'use client'

import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard'
import { getUser, User } from '../utilities/getUser';
import SkeletonCard from './SkeletonCard';
import Link from 'next/link';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Profile = () => {
  const [user, setUser] = useLocalStorage('user', "undefined");
  const signed = useLocalStorage('signed', 'false')[0];
  
  useEffect(() => {
    if (signed == 'true') {
      getUser().then(res => {
        setUser(res)
      })
    }
  },[])

  if(signed == 'false' || signed=='') {
      return (
          <div className="w-1/3 md:w-5/6 p-5 my-56 flex flex-col items-center">
              <h1 className="text-3xl font-bold">You are not logged in</h1>
              <Link href="/login" className='bg-[#262626] hover:bg-gray-700 text-white font-bold mt-4 py-2 px-4 rounded'>Login</Link>
          </div>
      )
  }else{
    return (
      user === undefined ? <SkeletonCard /> : <ProfileCard user={user} />
    )
  }
}

export default Profile