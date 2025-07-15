import React from 'react';
import { useParams } from 'react-router-dom';

export default function User(){
    const {userId} = useParams( )
    return(
        <>
            <div className='text-center text-3xl bg-cyan-300 text-white p-4'>user:{userId}</div>
        </>
    )
}