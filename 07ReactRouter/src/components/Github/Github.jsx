import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData] = useState([])
    // we will use API to get github info
    // useEffect(() =>{
    //     fetch('https:api.github.com/users/Pksubudhi25')
    //     .then(response =>response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

    const data = useLoaderData()
  return (
    <div className='text-center bg-blue-500 text-rose-500 m-4 text-3xl'>
        Github followers:{data.followers}
        <img src={data.avatar_url} alt="Github profile picture" width={100} height={100}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>
    {
        const response =  await fetch('https:api.github.com/users/Pksubudhi25')
        return response.json()
    }