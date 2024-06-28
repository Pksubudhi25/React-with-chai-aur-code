import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='bg-gray-700 text-red-500 text-center text-3xl'>
      User:{userid}
    </div>
  )
}

export default User
 