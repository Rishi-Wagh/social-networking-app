import React from 'react'
import './homepage.style.scss'
import Stories from '../../Components/Stories/Stories'
import Posts from '../../Components/Posts/Posts'

const Homepage = () => {
  return (
    <div className='home'>
        <Stories />
        <Posts />
        
    </div>
  )
}

export default Homepage