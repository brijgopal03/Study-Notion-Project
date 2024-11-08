import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import toast from 'react-hot-toast'

const Navbar = (props) => {
  let isLoggedin = props.isLoggedIn;
  let setisLoggedIn = props.setisLoggedIn;
  return (
    <div className='flex justify-evenly'>
        <Link to="/"> <img src={Logo} alt="logo" width={160} height={32} loading='lazy' /> </Link>
        <nav>
          <ul className='flex gap-3'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to = "/">Contact</Link>
            </li>
            <li>
              <Link to = "/">About</Link>
            </li>
            
          </ul>
        </nav>

<div className='flex gap-3 ml-5'>
  { !isLoggedin && <Link to = "/login" ><button>Login</button></Link>}
  {!isLoggedin && <Link to = "/signup" ><button>SignUp</button></Link>}
  {isLoggedin &&  <Link to = "/"><button onClick={()=>{setisLoggedIn(false); toast.success("Logged Out!");}}>Log Out</button></Link> }
  {isLoggedin &&  <Link to = "/dashboard"><button>Dashboard</button></Link>}
</div>

    </div>
  )
}

export default Navbar