import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { LoginContext } from "../contexts/LoginContext";
import {useContext} from "react";

function Profile  ()  {



  let [currentUser,err,userLoginStatus,loginUser,logutUser]= useContext(LoginContext);

  let [finalProducts,setfinalProducts]=useState([])

  
    let f=async()=>{

      const result={

        username:currentUser.username
      }
      
      
        let response= await axios.post("http://localhost:4000/product-api/Profile",result)
       let data=response.data
       
       const x=data.user
        
        setfinalProducts(x);
  
  }
    f()
    
    
  






  return (
    <div>
      <div   className='f  mt-5'>
           { 
          finalProducts.map((item,index)=>{
            return(
            
               <div className="card  z ">
               <div className="card-body mt-4 text-start ">
              
            <div key={index} >
          {Object.keys(item).map((key) => (

            (key!=='_id') && 
              <div key={key}>
              <h2><b>{key}</b> : {item[key]}</h2>
              
            </div>
          

              ))}
             
        </div>
  
          
            </div>
            </div>
           
             
            )
          }) }
          




</div>
    </div>
  )
}

export default Profile
