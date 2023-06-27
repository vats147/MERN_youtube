import React, { useState } from "react";

const AddProduct = ()=>{
       const [name,setName]=useState("");
       const [price,setPrice]=useState("");
       const [category,setCategory]=useState("");
       const [company,setCmp]=useState("");
       const addProduct=async ()=>{
              let userId=await JSON.parse(localStorage.getItem('user'));
              userId=userId._id;
              console.warn(name,price,category,company,userId);
              let result= await fetch("http://localhost:3000/add-product",{
                     method:"POST",
                     body: JSON.stringify({name,price,category,userId,company}),
                     headers:{
                            'Content-Type': 'application/json'
                     }
              });
              result =await result.json();
              console.warn(result);
       }
       return (
              <div className="product">
                     <h1>Add Product</h1>
                     <input type="text" placeholder="Enter Product Name" className="inputBox"
                     value={name} onChange={(e)=>{setName(e.target.value)}}/>
                     <input type="text" placeholder="Enter Product price" className="inputBox"
                     value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                     <input type="text" placeholder="Enter Product Category" className="inputBox"
                     value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
                     <input type="text" placeholder="Enter Product company" className="inputBox"
                     value={company} onChange={(e)=>{setCmp(e.target.value)}}/>

                     <button onClick={addProduct} className="btn" >Add Product</button>
              </div>
       )
}

export default AddProduct;