import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const Blogs = () => {

  // Consuming Provider 
  const{posts, loading} = useContext(AppContext);


  return (
    <div>
        {
        loading ? (<Spinner/>) : (
          posts.length === 0 ? (
            <div>
              <p>No Posts Available</p>
            </div>
          ) : (posts.map((post) => (
              <div key={post.id}>
                <p className='text-3xl font-bold'>{post.title}</p>
                <p>
                  By <span>{post.author}</span> on <span>{post.category}</span>
                </p>
                <p>Posted On {post.date}</p>
                <p>{post.content}</p>

                <div>
                    {post.tags.map( (tag, index) => {
                        return <span key={index}>{`#${tag}`}</span>
                    } )}
                </div>
              </div>
          )))
        )
       }
    </div>
  )
}

export default Blogs
