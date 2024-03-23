import React,{useState,useContext,useEffect} from 'react'
import { useForm, } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { LoginContext } from '../contexts/LoginContext';
import UserProfile from './UserProfile';


function Login() {


  let [currentUser,err,userLoginStatus,loginUser,logutUser]= useContext(LoginContext);



  let { register, handleSubmit, formState: { errors } } = useForm();



  const addUser = (userObj) => {
    console.log(userObj);
    
    loginUser(userObj)
  }


  const navigate=useNavigate();

  useEffect(()=>{
    if(userLoginStatus==true){
      console.log(err)
      navigate('/UserProfile')
      

    }
 },[userLoginStatus])
  

  
  return (
    <div>
            
            <div className="container main mt-5">
                <div className="left">
                <form className="mx-auto form" onSubmit={handleSubmit(addUser)}>
                    <h3>Hey! Welcome Back,</h3>
                    <h4>Login back to your account</h4>
                <div className="box">
                    <label htmlFor="username"></label>
                    <input type="text" id="username" className=" form-control mb-2 mt-3" placeholder="username"{...register("username")}/>
                <div className="box">
                    <label htmlFor="password"></label>
                    <input type="password" className="form-control mb-2 mt-3" id="password" placeholder="password"{...register("password")}/>
                </div>
                </div>
                <button type="submit" className="btn mt-5 btn-primary"><b>Login</b></button>
                </form>
                </div>
                <div className="right">
                    <h2 className="mb-3">SKILLHUB</h2>
                    <h4>"Where Talent Meets Opportunity"</h4>
                </div>
            </div>
        </div>

  )
}

export default Login;