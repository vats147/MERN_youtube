// import React from "react";
import React,{useState,useEffect} from "react";
import {useNavigate} from  'react-router-dom';

const Signup=()=>{
       const [name,setName] =useState("");
       const [password,setPassword] = useState("");
       const [email,setEmail] = useState("");
       const navigate=useNavigate();
     
       useEffect(()=>{
              const auth=localStorage.getItem("user");
              if(auth)
              {
                     navigate('/');
              }
              else
              {

              }

       })
       const collectData=async ()=>{
              console.log(name,password,email);
              let result=await fetch("http://localhost:3000/register",{
                     method:"POST",
                     body:JSON.stringify({name,email,password}),
                     headers:{
                            'Content-Type':'application/json'
                     }
              });
               result=await result.json();
               localStorage.setItem("user",JSON.stringify(result));
               if(result)
               {
                     navigate('/');
                      
               }
       }
       return(
              <div className="register">
                     <h1>Register</h1>
                     <input className="inputBox" type="text"
                      value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name"/>
                    
                     <input className="inputBox"  type="email"
                     value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
                    
                     <input className="inputBox" type="password"
                      value={password} onChange={(e)=>setPassword(e.target.value)}placeholder="Enter password"/>
                    
                     <button onClick={collectData} className="btn" type="button">Sign Up</button>

              </div>
       )
}

export default Signup