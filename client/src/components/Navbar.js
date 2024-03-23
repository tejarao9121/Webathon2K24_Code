import React,{useContext}from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { LoginContext } from '../contexts/LoginContext';



const Navbar = () => {

    let [currentUser,err,userLoginStatus,loginUser,logutUser]= useContext(LoginContext);



  return (
    <div className="navbar-styles">
        <h1 className="logo">SKILLHUB</h1>
        <div className='navbar-link-styles'>
   
   <ul className='list-inline m-3 p-2'>
            
 
           {userLoginStatus===false?
           <div>
             <li className='list-inline-item x nav-item'>
                 <Link className='x m-3 nav-link'to='/'>HOME</Link>
             </li >
         
         <li className='list-inline-item x nav-item'>
                 <Link className='x m-3 nav-link' to='/Login'>LOGIN</Link>
                 
             </li>
 
         <li className='list-inline-item x nav-item'>
         <Link className='x m-3 nav-link' to='/Register'>REGISTER</Link>
         </li>
         <li className='list-inline-item x nav-item'>
                 <Link className='x m-3 nav-link' to='/Help'>HELP</Link>
             </li>
         </div>
 
             :
             <div>
                <li className='list-inline-item x nav-item'>
                 <Link className='x m-3 nav-link'to='/'>HOME</Link>
             </li >
 
              <li className='list-inline-item x nav-item'>
              <Link className='x m-3 nav-link' to='/Login'  onClick={logutUser}>LOGOUT</Link>
   </li >
   <li className='list-inline-item x nav-item'>
                 <Link className='x m-3 nav-link' to='/Help'>HELP</Link>
             </li>
   
   </div>}  
           
         </ul>
       
       
     </div>
    </div>
   
  )
}

export default Navbar;