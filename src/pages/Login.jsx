import { Input,Button, Divider, AspectRatio } from '@chakra-ui/react'
import React, { useState } from 'react'
import loginBg from "../images/paymentBg.png"
import googleimg from "../images/search.png"
import "../style/login.css"
import {createUserWithEmailAndPassword,signInWithPopup} from "firebase/auth"
import { auth, googleProvider } from '../firebase-config/config'
import { Link ,useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/Authcontext";
import { Alert } from "@chakra-ui/react";

export const Login = () => {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("")
    const [error,setError] = useState("")
    const {login,googleSignin} = useUserAuth()
    const navigate = useNavigate()

    // handle sign in 
    const handlesignin = async() => {
      try{
        await login(email,pass)
        alert("Login Successfully")
        navigate("/turf")
      }catch(err){
        setError(err.message)
      } 
    }
    const signinWithgoogle = async() => {
      try{
       await googleSignin()
       navigate("/turf")
      }catch(err){
        console.log(err)
      }
    }
    const handlePost = async () => {
      try {
        const response = await fetch('http://your-strapi-url/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password: pass }), // Assuming you want to send the password
        });
  
        if (!response.ok) {
          throw new Error('Error posting data');
        }
  
        const data = await response.json();
  
        // Handle the response data as needed
        console.log('Response:', data);
  
        alert('Data posted successfully!');
      } catch (err) {
        console.error(err);
        setError('Error posting data');
      }
    };
  
  return (
    <div id='loginContainer'>
        <div id='loginBg'>
            <img src={loginBg} alt="" />
        </div>
        <div id='loginform'>
            <h1 id='headingLogin'>LOGIN</h1>
            {
            error && <Alert variant={"subtle"} status='error'>{error}</Alert>
           }
            <div>
              <p id='username'>EMAIL</p>
              <Input type="text" placeholder='EMAIL' onChange={(e)=>setEmail(e.target.value)} border="2px solid black"/>
            </div>
            <div>
               <p id='password'>PASSWORD</p>
               <Input type="password" placeholder='PASSWORD' onChange={(e)=>setPass(e.target.value)} border="2px solid black"/>
            </div>
            <Button id='loginFormBtn' onClick={handlesignin}>Login</Button>
            <Button id='loginwithBtn' onClick={signinWithgoogle}>
              <div id='glogo'>
                <img src={googleimg} alt="" />
              </div>
              <Button id='postDataBtn' onClick={handlePost}>
        Post Data
      </Button>
              <p id='gtext'>Login with Google</p>
            </Button>
             <p>Don't have an account? <Link to={"/signup"}>Sign Up</Link></p>
        </div> 
    </div>
  )
}
