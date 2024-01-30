import React, { useContext } from 'react'
import './stories.style.scss'
import {AuthContext} from '../../Context/Authcontext'
const Stories = () => {
    
    const { currentUser } = useContext(AuthContext)
    
    const story = [
        {
            id:1,
            name:'Jhon cena',
            image:'https://images.pexels.com/photos/2108813/pexels-photo-2108813.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id:2,
            name:'Jhon cena',
            image:'https://images.pexels.com/photos/2218344/pexels-photo-2218344.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id:3,
            name:'Jhon cena',
            image:'https://images.pexels.com/photos/5716598/pexels-photo-5716598.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id:4,
            name:'Jhon cena',
            image:'https://images.pexels.com/photos/8919725/pexels-photo-8919725.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
    ]

    
  return (
    <div className='stories'>
        <div className="story" >
                <img src={currentUser.img} alt='' style={{backgroundColor: 'rgba(204, 198, 198, 0.629)'}}/>
                <span>Add story</span>
                <button> + </button>
            </div>
        {story.map(s =>(
             <div className="story" key={s.id}>
                <img src={s.image} alt=''/>
                <span>{s.name}</span>
            </div>
        ))}
    </div>
    
  )
}

export default Stories