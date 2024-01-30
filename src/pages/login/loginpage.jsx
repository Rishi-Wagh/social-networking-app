import React  from 'react'
import './login.style.scss'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/Authcontext'
import { useContext } from 'react'

const Loginpage = () => {

    const {login} = useContext(AuthContext);

    const handlelogin = (e) =>{   
        e.preventDefault();
        login();   
    }

  return (
    <div className="login">
        <div className="cart">
            <div className="left">

                <h1> Welcome! </h1>
                <p> If not registered with us, please click the button below and become part of our community.</p>
                <Link to={'/register'}>
                <button> Register </button>
                </Link> 

            </div>
            <div className="right">
                
                <h1> Sign In </h1>
                <form>
                    <input type='text' placeholder='username'></input>
                    <input type='password' placeholder='password'></input>
                    
                    <button onClick={handlelogin}> log in </button>
                   
                </form>

            </div>
        </div>
    </div>
  )
}

export default Loginpage