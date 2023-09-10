import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {
    return (
        <div >
            <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
                <Skeleton className='mx-2' height={'200px'} width={'320px'} enableAnimation={true} />
                <Skeleton className='mx-2' height={'50px'} width={'320px'} enableAnimation={true} />
                <Skeleton className='mx-2' height={'30px'} width={'320px'} enableAnimation={true} />
                <Skeleton className='mx-2' height={'30px'} width={'320px'} enableAnimation={true} />
                <Skeleton className='mx-2' height={'10px'} width={'320px'} enableAnimation={true} />
            </SkeletonTheme>
        </div>
    )
}

export default Loading