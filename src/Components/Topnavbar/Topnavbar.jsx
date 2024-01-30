import React, {useContext} from 'react'
import './topnavbar.style.scss';
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { ThemeContext } from '../../Context/ThemeContext';


const Topnavbar = () => {

  const { toggle, darktheme } = useContext(ThemeContext)

  return (
<>
  <div className='navbar'>
     <div className='left'>
       <div className="logo">
       <span className='lside'>Social</span><span className='rside'>King</span>
       </div> 
        <Link to={'/home'}> 
          <HomeOutlinedIcon style={{ color: `${darktheme ? 'white' : 'black'}`}}/>
        </Link>
        {  
          darktheme ?
            <Brightness5OutlinedIcon onClick={toggle} style={{cursor: 'pointer'}}/>
            :
            <DarkModeOutlinedIcon onClick={toggle} style={{cursor: 'pointer'}}/>
          }
        
        <GridViewOutlinedIcon />
            <div className="search">
               <SearchOutlinedIcon />
               <input type='text' placeholder='Search...'></input>
            </div>
     </div>

    <div className="right">
       <PersonOutlineOutlinedIcon />
       <EmailOutlinedIcon />
       <NotificationsNoneOutlinedIcon />
          <div className="user">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=6002\" alt="" />
            <span> Jhon cena </span>
          </div>  
    </div>
</div>

</>
  )
}

export default Topnavbar