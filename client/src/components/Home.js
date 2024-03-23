import {React} from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'

import './Home.css'
import { useState } from 'react';




function Home() {

  let [finalProducts,setfinalProducts]=useState([])


  
  const [location, setLocation] = useState(null);

  let { register, handleSubmit, formState: { errors } } = useForm();

  const addUser = (userObj) => {

//     let f=async()=>{
//       console.log("before sending in home",userObj)
      
//        let response= await axios.post("http://localhost:4000/product-api/Cart1",userObj)
//        let data=response.data
//        console.log(data.user,"in home..")
//        const x=data.user
//        console.log("after final products  to display",x);
//        setfinalProducts(x);

     

  
//   }
//     f()
    
    
  }

  return (
    <div className="bg-container">
      <h1 className="home-content">
        Unleashing and Bridging Talents Beyond Borders
      </h1>
    </div>
  
  
  )
}

export default Home