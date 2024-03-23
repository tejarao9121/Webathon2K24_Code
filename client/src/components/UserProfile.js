import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
import { Outlet } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FcCollaboration } from "react-icons/fc";
import Search from './Search';
import Post from './Post'
import Profile from './Profile'
import "./UserProfile.css"



function UserProfile(){


    
  let [currentUser,err,userLoginStatus,loginUser,logutUser]= useContext(LoginContext);
   
    return(
       <div className="p-5">
        <p className="text-heading">Hello Welcome </p>
       

        <ul className='list-inline m-3 p-2'>

    <li className='list-inline-item x button'>
        <Link className='x m-3 link'to='Post'><span className="icon"><MdAddBox /></span>Post</Link>
    </li >
    <li className='list-inline-item x button'>
        <Link className='x m-3 link'to='Search'><span className="icon"><FaSearch /></span>Search</Link>
    </li >
    <li className='list-inline-item x button'>
        <Link className='x m-3 link'to='Profile'><span  className="icon"><CgProfile /></span>Profile</Link>
    </li >
    <li className='list-inline-item x  '>
        <Link className='x m-3 link'to='Collaboration'><span  className="icon"><FcCollaboration /></span>Collaborate</Link>
    </li >
    
    </ul>
    <Outlet/>

       </div>
    )
}
export default UserProfile;