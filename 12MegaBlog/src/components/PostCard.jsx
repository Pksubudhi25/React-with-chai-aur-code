import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'
// This '$' is syntax of appwrite
function PostCard({$id, title,featuredImage}) {
  return (
    <div>
      {/* The whole card is clickable so wrap it in Link */}
      <Link to={`/post/${$id}`}>
        <div className="w-full rounded-xl bg-gray-100 p-4">
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview
                (featuredImage)} alt={title}
                className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
      </Link>
    </div>
  )
}

export default PostCard
