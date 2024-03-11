import React, { useState } from "react";
import { Button, Input,FormHelperText,FormErrorMessage, FormControl, FormLabel } from "@chakra-ui/react";
import { Link ,useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/Authcontext";
import { Alert } from "@chakra-ui/react";
import axios from "axios";


export const Signup = () => {
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [input, setInput] = useState('')
    const [password,setPassword] = useState("")
    const [username, setUserName] = useState("")
    const [error,setError] = useState("")
    const {signup} = useUserAuth()
    const navigate = useNavigate()
    

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''
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
        alert("Enter valid credentials",err);
      }
    }
  const handleKeyPress = (e) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.key === 'Enter') {
      handlesignup();
    }
  };
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
        <FormControl isrequired>
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          
          <FormLabel id="username">USERNAME</FormLabel>
          <Input
            type="text"
            placeholder="USERNAME"
            onChange={(e) => {setUserName(e.target.value) ; handleInputChange(e) }}
            border="1px dotted #0e74be"
            onKeyDown={handleKeyPress}
          />{!isError ? (
              <FormErrorMessage>Email is required.</FormErrorMessage>
          ) : (
            <FormHelperText>
              Enter your valid email address 
            </FormHelperText>
          )}
        </div>
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          
          <FormLabel id="username">Mobile No</FormLabel>
          <Input
            type="phone"
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
            border="1px dotted #0e74be"
            onKeyDown={handleKeyPress}
          />
           {!isError ? (
          <FormErrorMessage color={"red"}>Number is required</FormErrorMessage>
      ) : (
        <FormHelperText>
          Make sure your mobile is 10 digit 
        </FormHelperText>
      )}
        </div>
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <FormLabel id="username">EMAIL</FormLabel>
          <Input
            type="email"
            placeholder="EMAIL"
            onChange={(e) =>{ setEmail(e.target.value) ; handleInputChange(e) }}
            border="1px dotted #0e74be"
            onKeyDown={handleKeyPress}
          />
           {!isError ? (
          <FormErrorMessage color={"red"}>Email is required</FormErrorMessage>
      ) : (
        <FormHelperText>
          Make sure your email is valid
        </FormHelperText>
      )}
        </div>
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <FormLabel id="password">PASSWORD</FormLabel>
          <Input
            type="password"
            placeholder="PASSWORD"
            onChange={(e) => { setPassword(e.target.value); handleInputChange(e) }}
            border="1px dotted #0e74be"
            onKeyDown={handleKeyPress}
          />
          {!isError ? (
          <FormErrorMessage color={"red"}>Password is required</FormErrorMessage>
      ) : (
        <FormHelperText>
          Make sure your password is at least 8 characters 
        </FormHelperText>
      )}
                </div>
                </FormControl>

        <Button id="loginFormBtn" onClick={handlesignup} >
          SIGN UP
        </Button>
        <p style={{ marginTop: "10px" }}>Already have an account? <Link to={"/login"} style={{ color: "#0e74be",fontWeight: "500" }} >Log In</Link></p>
      </div>
    </div>
  );
};