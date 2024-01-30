import React from 'react'
import './rightnavbar.style.scss'

const Rightnavbar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="items">
          <span>Suggestions For You</span>

          <div className="user">

           <div className="userinfo">
            <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>Mark Henry</span>
           </div>

           <div className="buttons">
            <button>follow</button>
            <button>dismiss</button>
           </div>

           
          </div>

          <div className="user">

           <div className="userinfo">
            <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>Mark Henry</span>
           </div>

           <div className="buttons">
            <button>follow</button>
            <button>dismiss</button>
           </div>

           
          </div>

          
        </div>
        <div className="items">
           <span>Latest Activites</span>

          <div className="user">

            <div className="userinfo">
             <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
             <p>
                 <span>Mark Henry</span> uploaded picture   
             </p> 
            </div>

            <div>
            <span>1 min ago</span>
            </div>

          </div>
       </div>
       
       <div className="items">
           <span>Online Friends</span>

          <div className="user">

            <div className="userinfo">
             <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            
                 <div className="online">
                  </div>

                  <span>Mark Henry</span>
            </div>
            
          </div>
     </div>     
    </div>
  </div>
  )
}

export default Rightnavbar