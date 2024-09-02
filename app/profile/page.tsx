'use client'

import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard'
import { getUser, User } from '../utilities/getUser';
import SkeletonCard from './SkeletonCard';
import Link from 'next/link';

const Profile = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [signed, setSigned] = useState<string | null>(null);

  useEffect(() => {
    setSigned(localStorage.getItem('signed'))
    if (signed === 'true') {
      getUser().then(res => {
        setUser(res.user)
      })
    }
  },[signed])

  if(signed === 'false') {
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