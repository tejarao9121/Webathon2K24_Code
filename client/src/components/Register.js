import React, { useState } from 'react'
import './Register.css'
import { useForm } from "react-hook-form"
import axios from 'axios';
import {useNavigate} from "react-router-dom"





function Register() {
  let [err,setErr]=useState("")

  //navi
  const navigate =useNavigate()
  
  let { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (e) => {
    e.preventDefault();

   
    console.log("deta;is of form",e.target);

    const userObj={
      email:e.target.email.value,
      username:e.target.username.value,
      password:e.target.password.value,
      DOB:e.target.DOB.value,
      gender:e.target.gender.value,
      category:e.target.category.value,
      subcategory:e.target.subcategory.value
    }
   
      

   console.log(" before in the register",userObj)

    
   let f=async()=>{

     console.log(userObj)
     
     let response= await axios.post("http://localhost:4000/user-api/Register",userObj)
     let data=response.data
     console.log(data,"in register...")
     
     

     if(data.message==="user created"){


      
    // emailjs.sendForm('service_j1yifah','template_i1102b3',e.target,'N8P7n2MYW_DwUHqQA')
    // .then((result) => {
    //   console.log(result.text);
    // }, (error) => {
    //   console.log(error.text);

    // });

      
       navigate('/Login');
       
     }
     else{
       setErr(data.message)
     }

 
 }
  f()

  

   
  };


  

   

 
  

  return (
    <div className='p m-5'>
      <h1>Register</h1>
      { ((err==="username already exist" || err==="username and email already exist") || err==="email already exist")  && (
        <p className='display-3 text-danger text-centre'>{err}</p>
      )}
      <div  className='xyz'>
      <div className='container abc'>
      
     
        

        <form onSubmit={sendEmail} className='w-75 '  >
          
          
           <div className="form-group text-start ">
            <label htmlFor="email" className='mt-2 '>Enter Email:</label>
            <input type="email" className="form-control mt-2" id='email'   {...register("email", { required: true })}></input>
           {/* {err.name?.type === "required" && (
              <p className='text-danger fw-blod fs-5'>Email is required</p>
            )} */}

          </div>
          <div className="form-group mt-3 text-start">
            <label htmlFor="username">Username:</label>
            <input type="text" className="form-control mt-2" id="username" name='username' placeholder="username " {...register("username", { required: true })}></input>
          </div>
         
          <div className="form-group mt-3 text-start">
            <label htmlFor="password">Enter Password:</label>
            <input type="password" className="form-control mt-2" id="password" name='password'  {...register("password", { required: true })}></input>
          </div>
          <div className="form-group mt-3 text-start">
            <label htmlFor='DOB'>DOB</label>
            <input type="date" className="form-control mt-2" id="DOB" placeholder="DateOfBirth" name='DOB'{...register("DOB", { required: true })}></input>
          </div>
          <div className="form-group mt-3 text-start">
            <label htmlFor="gender">Gender:</label>
            <input type="radio"  id="gender"  name='gender' value='male' {...register("gender", { required: true })}/>Male
            <input type="radio"  id="gender"  name='gender' value='female' {...register("gender", { required: true })}/>Female
          </div>

          <div className="form-group mt-3 text-start">
            <label htmlFor="category">Category:</label>
            <select name="category" id="category" >
            <option value=''></option>

                <option value='developer' {...register("category", { required: true })}>Developer </option>
                <option value='entertainment'{...register("category", { required: true })}>Entertainment</option>
            </select>
          
          </div>
          <div className="form-group mt-3 text-start">
            <label htmlFor="subcategory">Sub Category:</label>
            <input type="text" className="form-control mt-2" id="subcategory" name='subcategory' placeholder="subcategory" {...register("subcategory", { required: true })}></input>
          </div>

         
            


          <input type="submit" className="btn btn-primary m-3 mb-5" value="register" /> 
          </form>
         



      </div>

      </div>








    </div>
  )
}

export default Register