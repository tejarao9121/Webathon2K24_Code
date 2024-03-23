const exp=require("express");
const productApp=exp.Router();

const expressAsyncHandler=require('express-async-handler');




productApp.use(exp.json());
productApp.post("/Search",expressAsyncHandler(async(request,response)=>{

    const productCollection=request.app.get('productcollection');

    const newData=request.body;

    console.log(newData)
    

     let products=await productCollection.find({category:newData.category}).toArray();

    
     console.log("in cart api",products);

     const x=[]

     for(i=0;i<products.length;i++){

      if (products[i].username !=newData.username){
        x.push(products[i])
      }

     }

     console.log("wdih",x)
    

     response.status(200).send({message:"user list",user:x});
}))




productApp.use(exp.json());
productApp.post("/Profile",expressAsyncHandler(async(request,response)=>{

    const productCollection=request.app.get('productcollection');

    const newData=request.body;

  
    

     let products=await productCollection.find({username:newData.username}).toArray();

    
     const x=[];

    
    

     response.status(200).send({message:"user list",user:products});
}))







module.exports=productApp;