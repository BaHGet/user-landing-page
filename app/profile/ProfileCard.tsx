import React from 'react'
import Image from 'next/image'

import { User } from '../utilities/getUser'

const ProfileCard = ({user}: {user: User | undefined}) => {
    
    return (
        <div id='profileContainer' className='h-64 flex flex-row items-center m-auto border border-gray-300 p-2'>
            {user?.image && <Image src={user?.image || '/aad'} width={100} height={100} alt="profile" />}
            <div id="profileInfo">
                <p className='text-3xl'>{user?.firstName + ' ' + user?.lastName}</p>
                <h2 className='text-xl mb-2'>{user?.email}</h2>
                <p className='text-md text-gray-400'>{user?.gender === 'male' ? 'He/him' : 'She/her'}</p>
            </div>
        </div>
    )
}

export default ProfileCard