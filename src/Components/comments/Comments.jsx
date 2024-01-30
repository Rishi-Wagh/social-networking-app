import React from 'react'
import './comment.style.scss';
import { useContext } from "react";
import { AuthContext } from "../../Context/Authcontext";
import SendIcon from '@mui/icons-material/Send';

const Comments = () => {

    const {currentUser} = useContext(AuthContext);

    const comments = [{
        id: 1,
        userId: 1,
        name: 'Mark Henry',
        desc: 'Nice , Nice ......',
        profilePicture: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 2,
        userId: 2,
        name: 'Mark Henry',
        desc: 'Nice , Nice ......',
        profilePicture: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 3,
        userId: 3,
        name: 'Mark Henry',
        desc: 'Nice , Nice ...... ghzgihih ihsihfgiu ufi weuifegh uegrf iugeiWGUIEUIGHUIWYFGIOUHWUEHF9q9fhi 9wKFZSDHVJH UFSGF FUGFUYFGIGHFUISIC IGFKIIa FUIGFIGF UGFGA FAGFGJ FGFaFGUGFB GUYGaFVBajwVBDFJAFJvFUjBZJHSDFZBSFUYSVJNUHZSVF Zdjgkj ghgjzjkfgzus guybvjgdfbzsf jgfujzsg dfz s sdzgfjg vg fug',
        profilePicture: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 4,
        userId: 4,
        name: 'Mark Henry',
        desc: 'Nice , Nice ......',
        profilePicture: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600'
    }]
  return (
    <div className='Comments'>
        <div className="write">
           <img src={currentUser.img} alt="" />
           <input type="text" placeholder='write a comment..' />
           <button><SendIcon /></button>
        </div>
       {comments.map( c =>{
       return <div className="comment">
            <img src={c.profilePicture} alt="" />
             <div className="info">
                <span>{c.name}</span>
                <p>{c.desc}</p>
             </div>
        </div>
       })
    }</div>
  )
}

export default Comments