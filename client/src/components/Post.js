import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import {useContext} from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
import { Outlet } from "react-router-dom";


function Post() {

    let { register, handleSubmit, formState: { errors } } = useForm();

    let [currentUser, err, userLoginStatus, loginUser, logutUser] = useContext(LoginContext)



    const addUser = (userObj) => {

        const result = {
          
          username:currentUser.username,
          post:userObj.post[0]
           }
       
          
    
       console.log(" before in the register",result)
    
        
       let f=async()=>{
    
         console.log("it is",userObj)
         
          let response= await axios.post("http://localhost:4000/product-api/Post",result)
        //  let data=response.data
        //  console.log(data,"in register...")
         
         
    
     
     }
      f()
    
      
    
        
      };
    



    


  return (
    <div>




<form onSubmit={handleSubmit(addUser)} className='w-75'  >
          
          
          <div className="form-group text-start ">
           <label htmlFor="post" className='mt-2 '>Upload</label>
           <input type="file" className="form-control mt-2" id='post'   {...register("post", { required: true })}></input>

         </div>

        
           


         <input type="submit" className="btn btn-primary mt-3" value="post" /> 
         </form>

      
    </div>
  )
}

export default Post;
