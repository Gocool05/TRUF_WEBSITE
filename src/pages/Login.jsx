import { Box, Input, Button, Alert, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import '../style/login.css';
import { useNavigate, Link } from 'react-router-dom';
import { useUserAuth } from '../context/Authcontext';
import axios from 'axios';
import TurfzListing from '../pages/TurfzListing';

export const Login = () => {
  const [identifier, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [error, setError] = useState('');
  const { login, googleSignin } = useUserAuth();
  const navigate = useNavigate();


  // const signinWithgoogle = async () => {
  //   try {
  //     await googleSignin();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handlePost = async () => {
    try {
      const response = await axios.post('https://strapi.letstrydevandops.site/api/auth/local', {
        identifier,
        password,
      });
      console.log(response.data);
      navigate('/turf');
      const responseData = response.data.user.id;
      const emailId = response.data.user.email;
      const name = response.data.user.username;
      localStorage.setItem('userId', responseData.toString());
      localStorage.setItem('emailId', emailId.toString());
      localStorage.setItem('Name', name.toString());
      console.log(responseData);
      localStorage.setItem('apiResponse', responseData.toString());
      
    } catch (error) {
      
      setError('Error posting data');
    }
  };

  return (
    <Box
      id="loginContainer"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      position="relative"
    >
      <Box id="loginBg" flex="1" width="100%" position="absolute">
        {/* <img src='https://res.cloudinary.com/dx78kzenz/image/upload/v1700478259/turfbg_fdghts.jpg' alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
      </Box>
      <Box
        id="loginform"
        bg="white"
        p={6}
        borderRadius="md"
        boxShadow="md"
        width={{ base: '90%', md: '70%', lg: '50%' }}
        zIndex="1"
      >
        <Text id="headingLogin" textAlign="center" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} mb={4}>
          LOGIN
        </Text>
        {error && <Alert variant="subtle" status="error">{error}</Alert>}
        <Box>
          <Text id="username" mb={2}>
            EMAIL
          </Text>
          <Input type="text" placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)} border="1px dotted #0e74be" />
        </Box>
        <Box>
          <Text id="password" mb={2}>
            PASSWORD
          </Text>
          <Input type="password" placeholder="PASSWORD" onChange={(e) => setPass(e.target.value)} border="1px dotted #0e74be" />
        </Box>
        <Button id="loginFormBtn" onClick={handlePost} mt={4} width="100%">
          Login
        </Button>
        {/* <Button id="loginwithBtn"  mt={2} width="100%">
          <Box id="glogo" mr={2} display="inline-block" className='searchImg'>
            <img src='https://res.cloudinary.com/dx78kzenz/image/upload/v1702027041/google_logo_ff05da96f9.png' alt="" />
          </Box>
          <Text id="gtext" display="inline-block">
            Login with Google
          </Text>
        </Button> */}
        <Box mt={4}>
          <Text>
            Don't have an account? <Link to="/signup"  style={{ color: "#0e74be",fontWeight: "500" }}>Sign Up</Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
