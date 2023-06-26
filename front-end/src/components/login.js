import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");
       const navigate=useNavigate();
       useEffect(()=>{
              const auth= localStorage.getItem("user");
              if(auth)
              {
                     navigate('/');
              }
              
       },[]);
       const collectData = async () => {
              let result = await fetch("http://localhost:3000/login",
                     {
                            method: "POST",
                            body: JSON.stringify({ email, password }),
                            headers: {
                                   'Content-Type': 'application/json'
                            }
                     });
                     result=await result.json();
                     if(!result.name)
                     {
                            alert("Please enter correct details");
                     }
                     else
                     {
                            localStorage.setItem("user",JSON.stringify(result));
                            navigate('/');
                            // alert("Done");
                     }
              console.log(result);
       }
       return (
              <div className="register">
                     <h1>Login</h1>

                     <input className="inputBox" type="email"
                            value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />

                     <input className="inputBox" type="password"
                            value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />

                     <button onClick={collectData} className="btn" type="button">Sign Up</button>

              </div>
       )
}

export default Login