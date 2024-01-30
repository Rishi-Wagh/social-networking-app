import Topnavbar from '../Components/Topnavbar/Topnavbar';
import Leftnavbar from "../Components/Leftnavbar/Leftnavbar";
import Rightnavbar from "../Components/Rightnavbar/Rightnavbar";
import '../app.style.scss';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
const Layout = () =>{

  const {darktheme} = useContext(ThemeContext)

    return (
      <>
      <div className={`theme-${darktheme ? 'dark':'light'}`}>
        <Topnavbar />
      <div style={{display: "flex"}}>
       <Leftnavbar />
       <Outlet />
       <Rightnavbar />
      </div>
     </div> 
      </>
      
    )
  }

  export default Layout