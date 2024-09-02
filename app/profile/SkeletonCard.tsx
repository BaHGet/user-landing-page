import { Skeleton } from '@mui/material'
import React from 'react'

const SkeletonCard = () => {
    return (
        <div id='profileContainer' className='h-64 flex flex-row items-center justify-center m-auto border border-gray-300 p-4'>
            <Skeleton 
                sx={{ bgcolor: '#989fab' }}  variant="rectangular" width={100} height={100} animation="pulse"/>
            <div id="profileInfo" className='w-64 h-64 flex flex-col justify-center mx-3'> 
                <Skeleton 
                    className='mt-6 mb-2 border border-gray-300' 
                    sx={{ bgcolor: '#989fab' }} 
                    variant="rounded" width={140} height={34}
                    animation="pulse"
                />
                <Skeleton 
                    className='mb-5 border border-gray-300' 
                    sx={{ bgcolor: '#989fab' }} 
                    variant="rounded" width={210} height={18}
                    animation="pulse"
                />
                <Skeleton 
                    className='mb-5 border border-gray-300'
                    sx={{ bgcolor: '#989fab' }} 
                    variant="rounded" width={100} height={12}
                    animation="pulse"
                />
            </div>
        </div>
    )
}

export default SkeletonCard  