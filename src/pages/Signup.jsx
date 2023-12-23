import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import { Link ,useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/Authcontext";
import { Alert } from "@chakra-ui/react";
import axios from "axios";


export const Signup = () => {
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");

    const [password,setPassword] = useState("")
    const [username, setUserName] = useState("")
    const [error,setError] = useState("")
    const {signup} = useUserAuth()
    const navigate = useNavigate()
    
    const handlesignup = async () => {
      
      try {
        const response = await axios.post('https://strapi.letstrydevandops.site/api/auth/local/register', {
          username,
          email,
          password,
          mobile
        });
        navigate('/login');
      }
      catch(err){
        console.log("error in signup",err);
      }
    }

  return (
    <div id="loginContainer">
      <div id="loginBg">
        {/* <img src='https://res.cloudinary.com/dx78kzenz/image/upload/v1700478242/fb_Post_xjctmf.jpg' alt="" /> */}
      </div>
      <div id="loginform" style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom: "20px",backgroundColor:"white",borderRadius:"5px"}}>
        <h1 id="headingLogin" style={{ marginTop: "20px" }}>SIGNUP</h1>
        {
            error && <Alert variant={"subtle"} status='error'>{error}</Alert>
        }
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <p id="username">USERNAME</p>
          <Input
            type="text"
            placeholder="USERNAME"
            onChange={(e) => setUserName(e.target.value)}
            border="1px dotted #0e74be"
          />
        </div>
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <p id="username">Mobile No</p>
          <Input
            type="phone"
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
            border="1px dotted #0e74be"
          />
        </div>
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <p id="username">EMAIL</p>
          <Input
            type="text"
            placeholder="EMAIL"
            onChange={(e) => setEmail(e.target.value)}
            border="1px dotted #0e74be"
          />
        </div>
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <p id="password">PASSWORD</p>
          <Input
            type="password"
            placeholder="PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
            border="1px dotted #0e74be"
          />
        </div>
        <Button id="loginFormBtn" onClick={handlesignup} >
          SIGN UP
        </Button>
        <p style={{ marginTop: "10px" }}>Already have an account? <Link to={"/login"} style={{ color: "#0e74be",fontWeight: "500" }} >Log In</Link></p>
      </div>
    </div>
  );
};