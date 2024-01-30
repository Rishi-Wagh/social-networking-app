import React from 'react'
import './post.style.scss'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import Comments from '../comments/Comments';
import { useState
 } from 'react';
const Post = ({post}) => {

  const [opencom , setOpencom] = useState(false);
  const liked = true;
  const{darktheme} = useContext(ThemeContext);

  return (
  <div className='Post'>
     <div className="container">
       <div className="user">
         <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
                <Link to={`/profile/${post.userId}`} style={{textDecoration: 'none' , color:`${darktheme ? 'white' : 'black'}`}} >
                <span className='name'>{post.name}</span>
                </Link>
                <span className='date'>1 min</span>
                
            </div>
         </div>
         <MoreHorizOutlinedIcon />
       </div>
       <div className="content">
           <p>{post.des}</p>
           <img src={post.img} alt="" />
       </div>
       <div className="interaction">
          <div className="item">
            {!liked ? <FavoriteBorderOutlinedIcon /> : <FavoriteOutlinedIcon />}
            0 Likes
          </div>
          <div className="item" onClick={()=>setOpencom(!opencom)}>
            <TextsmsOutlinedIcon />
            0 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
      </div> 
      { opencom && 
        <Comments />}
     </div>
  </div>
  )
}

export default Post