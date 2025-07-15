import React, { useEffect , useState} from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Github(){
    const data = useLoaderData();
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Dhruv14066')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])
    return(
        <>
            <h1 className='text-black bg-amber-200 text-center p-1'>Github Followers : {data.followers} 
                <img src={data.avatar_url} alt="Git Avatar" width = {300} flex item-center justify-center />
            </h1>
        </>
    )
}