// import React from 'react'
// import appwriteService from "../appwrite/config"
// import {Link} from 'react-router-dom'

// function PostCard({$id, title, featuredImage}) {
    
//   return (
//     <Link to={`/post/${$id}`}>
//         <div className='w-full bg-gray-100 rounded-xl p-4'>
//             <div className='w-full justify-center mb-4'>
//                 <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
//                 className='rounded-xl' />

//             </div>
//             <h2
//             className='text-xl font-bold'
//             >{title}</h2>
//         </div>
//     </Link>
//   )
// }


// export default PostCard 


import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`} className="block w-full">
        <div className='w-full bg-gray-100 rounded-xl p-4 h-full flex flex-col transition-transform duration-300 hover:scale-105'>
            <div className='w-full justify-center mb-4 flex-grow'>
                <img 
                    src={appwriteService.getFilePreview(featuredImage)} 
                    alt={title}
                    className='rounded-xl w-full h-48 object-cover'
                />
            </div>
            <h2
                className='text-lg sm:text-xl font-bold line-clamp-2'
            >
                {title}
            </h2>
        </div>
    </Link>
  )
}

export default PostCard