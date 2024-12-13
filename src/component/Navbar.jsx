import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProviver';
import { LuBriefcaseBusiness } from "react-icons/lu";

const Navbar = () => {

    let {user,handleSignOut}=useContext(AuthContext)


    let handleLogOut=()=>{
        handleSignOut()
        .then(() => {
            alert("signOut Successful")
          }).catch((error) => {
            // An error happened.
          });
    }



    let link=<>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/myApplication">My Application</NavLink></li>
        <li><NavLink to="/addajob">Add a job</NavLink></li>
        <li><NavLink to="/mypostedjobs">My Posted job</NavLink></li>
       
        
    
    
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <LuBriefcaseBusiness className='text-5xl'/>
    <a className="btn btn-ghost text-xl font-bold">Job Portal</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end">


    {user ?    <>

        <button onClick={handleLogOut} className='btn ms-3'>Sign Out</button>
    
    
    </>   
    
    :
    <>

<Link to="login"><button className='btn'>login</button></Link>
<Link to="register"><button className='btn ms-3'>Register</button></Link>
    
    
    </>
    }

    
  
  </div>
</div>
        </div>
    );
};

export default Navbar;