// import React from "react";
import React,{useState} from "react";

const Signup=()=>{
       const [name,setName] =useState("");
       const [password,setPassword] = useState("");
       const [email,setEmail] = useState("");
       const collectData=()=>{
              console.log(name,password,email);
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