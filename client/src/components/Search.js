import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { LoginContext } from "../contexts/LoginContext";
import {useContext} from "react";
import './Search.css'

function Search () {

  let [currentUser,err,userLoginStatus,loginUser,logutUser]= useContext(LoginContext);


    let [finalProducts,setfinalProducts]=useState([])


  
    const [location, setLocation] = useState(null);
  
    let { register, handleSubmit, formState: { errors } } = useForm();
  
    const addUser = (userObj) => {
  
      let f=async()=>{

        const result={
          category:userObj.category,
          username:currentUser.username
        }
        console.log("before sending in home",result)
        
          let response= await axios.post("http://localhost:4000/product-api/Search",result)
         let data=response.data
         console.log(data.user,"in home..")
         const x=data.user
          console.log("after final products  to display",x);
          setfinalProducts(x);
  
       
  
    
    }
      f()
      
      
    }

  return (
    <div>

<form className='container-fluid' onSubmit={handleSubmit(addUser)}>
          
          
          <div className="form-group">
            <input type="text" id='category' className="form-control rounded mt-5" placeholder="Search for category"  {...register("category", { required: true })}/>
            <button type="submit" className="btn btn-danger mt-4">search</button>
            
            
          </div>
          </form>



          <div   className='f  mt-5'>
           { finalProducts.length!=0?
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
          }) :<div className='k'><h1 className='mt-5 t'> Empty</h1></div>
          } 
          




</div>
      
    </div>
  )
}

export default Search
