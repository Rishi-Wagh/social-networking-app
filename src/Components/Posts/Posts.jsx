import React from 'react'
import './posts.style.scss';
import Post from '../Post/Post'
const Posts = () => {

const post = [
  {
    id: 1,
    name: 'Jhon Cena',
    userId: 1,
    profilePic:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=6002",
    des: 'something something ..........................',
    img:'https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Jhon Cena',
    userId: 2,
    profilePic:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=6002",
    des: 'something something ..........................',
    img:'https://images.pexels.com/photos/1738622/pexels-photo-1738622.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
] 

  return (
    <div className='posts'>
    {post.map( p => (
      <Post post={p} key={p.id}/>

      
    ))}
    </div>
  )
}

export default Posts