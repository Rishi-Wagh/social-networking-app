import React from 'react'
import "./register.style.scss"
import { Link } from 'react-router-dom'

const Registerpage = () => {
  return (
    <div className='register'>

     <div className="cart">
           
            <div className="left">
                
                <h1> Sign Up </h1>
                <form>
                    <input type='text' placeholder='name'></input>
                    <input type='text' placeholder='email'></input>
                    <input type='password' placeholder='password'></input>
                    <button> Register </button>
                </form>

            </div>

            <div className="right">

           <h1> Welcome! </h1>
           <p> We are delighted to have you as part of our family, Sign up and explore our community. </p>
           <p> If already have an account click here.</p>
           <Link to={'/'}>
           <button> Log in </button>
           </Link>
          

             </div>
        </div>
    </div>
  )
}

export default Registerpage