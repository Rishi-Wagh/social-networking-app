import React from 'react'
import './profile.style.scss'
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Posts from '../../Components/Posts/Posts'

const Profile = () => {

    

  return (
    <div className='Profile'>
        <div className="images">
            <img src="https://images.pexels.com/photos/12772295/pexels-photo-12772295.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='cover' />
            <img src='https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" className='profilePic' />
        </div>
        <div className="profileContainer">
            <div className="userInfo">
                <div className="left">
                    <div className="item">
                      <PlaceIcon />
                      <span> India </span>
                    </div>
                    <div className="item">
                      <LanguageIcon />
                      <span> English </span>
                    </div>
                </div>
                <div className="center">
                   <span>Mark henry</span>
                    <button> Follow </button>  
                </div>
                <div className="right">
                    <EmailOutlinedIcon />
                    <MoreVertOutlinedIcon />
                </div>
            </div>
           
        </div>
        <div className="profPost">
          <Posts />
        </div>  
    </div>
  )
}

export default Profile