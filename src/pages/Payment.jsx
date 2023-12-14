import React, { useEffect, useState } from 'react'
import "../style/payment.css"
import {IoMdArrowRoundBack} from "react-icons/io"
import { Link } from 'react-router-dom'
import { useUserAuth } from '../context/Authcontext'
import {  ref, onValue } from "firebase/database";
import { database } from '../firebase-config/config'
import { Checkbox,Button, Text} from '@chakra-ui/react'
import { PopoverProfile } from '../components/Popover'
import {PaymentElement} from '@stripe/react-stripe-js';
import { Login } from './Login'
import axios from 'axios';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

export const Payment = () => {
  // const {user} = useUserAuth();
  // const [name,setName] = useState("")
  // const [time,setTime] = useState("")

  // const getUserData = (uid) => {
  //      const userRef = ref(database,"users/"+ uid);
  //      onValue(userRef, (snapshot) => {
  //       const data = snapshot.val();
  //       console.log('Data:', data);
  //       if (data === null) {
  //         console.log('No DATA Found');
  //       } else {
  //         const bookingName = data.data;
  //         console.log('Booking Name:', bookingName);
    
  //         if (bookingName && bookingName.booking) {
  //           setName(bookingName.booking.name);
  //           setTime(bookingName.time);
  //         } else {
  //           console.error('Booking data is missing properties');
  //         }
  //       }
  //     });
  //   };
  // useEffect(()=>{
  //   if(user){
  //     getUserData(user.uid)
  //   }
  // },[name])
  // const OverlayOne = () => (
  //   <ModalOverlay
  //     bg='blackAlpha.300'
  //     backdropFilter='blur(10px) hue-rotate(90deg)'
  //   />
  // )

  // const OverlayTwo = () => (
  //   <ModalOverlay
  //     bg='none'
  //     backdropFilter='auto'
  //     backdropInvert='80%'
  //     backdropBlur='2px'
  //   />
  // )

  

  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const [overlay, setOverlay] = React.useState(<OverlayOne />)
  // const [ setUserData] = useState('');
  // const [email, setEmail] = useState('');
  // const [selectedDate, setSelectedDate] = useState('');
  // const [selectedTime, setSelectedTime] = useState('');

  // const handleClick = async () => {
  //   try {
  //     const stripe = window.Stripe('pk_test_51ODLKGSF9iDZ6jEYwG3BzYtnbBzoHHHEFvyja9xSgLiwypqxZ4msGIMSq6jjM9ZwwPu5xMoSNjP1x6jCtK46c5DD00L4qXiNDW');
  
  //     const requestBody = {
  //       email,
  //       Date :selectedDate,
  //       startTime:selectedTime
  //     }
  //     // Call your backend to create a checkout session with Stripe
  //     const response = await fetch('http://localhost:1337/api/checkout', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       // Pass any necessary data to your server for creating the checkout session
  //       body: JSON.stringify({ 
  //         /* Add your required data here */
          
  //     }),
  //     });
  
  //     const session = await response.json();
  
  //     const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
  
  //     if (error) {
  //       // Handle any errors that may occur during redirection
  //       console.error(error.message);
  //       return; // Exit function if redirection fails
  //     }
  //     const checkout = await axios.post('http://localhost:1337/api/checkout',{
  //       name:email,
  //       stripeId:session.id
  //     });
  
  //     // If redirection was successful, proceed to make API call to store booking details
  //     const bookingResponse = await axios.post('http://localhost:1337/api/bookings', {
  //       // Pass the booking details here
  //       // For example:
  //       requestBody,
  //       sessionId: session.id,
  //       // ...other booking details
  //     });
  
  //     // Handle bookingResponse or perform further actions
  //     // ...
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
  
  return (
    <>
<button  type="button" className="SS_ProductCheckout" data-id="8" data-email="ajay@gmail.com" data-url="https://strapi.letstrydevandops.site"> Subscribe </button>    </>


    // <div id='paymentContainer'>
    //       <div id="paymentNav">
    //         <Link to={"/turf"}>
    //          <IoMdArrowRoundBack fontWeight={"bold"} fontSize="30px"/>
    //          </Link>
    //          <p id='BookedTurfName'>{name}</p>
    //          <PopoverProfile email={user.email}/>
    //       </div>
    //       <div id='paymentContainerBox'>
    //         <div id='paymentMode'>
    //         <Text fontWeight={"bold"} fontSize="25px">Pay Now</Text>
    //          <Checkbox>Pay with card</Checkbox>
    //          <Checkbox>Pay with Cash</Checkbox>
             
    //   <Button
    //     onClick={() => {
    //       <PaymentElement />
    //       setOverlay(<OverlayTwo />)
    //       onOpen()
    //       handleClick();
    //     }}
    //     colorScheme="green"
    //   >
    //     checkout
    //   </Button>
    //   <Modal isCentered isOpen={isOpen} onClose={onClose}>
    //     {overlay}
    //     <ModalContent>
    //       <ModalHeader>Order Booked</ModalHeader>
    //       <ModalBody>
    //         <Text>Thanks for booking {name}</Text>
    //         <Text>Time : {time}</Text>
    //       </ModalBody>
    //       <ModalFooter>
    //         <Link to="/turf">
    //         <Button onClick={onClose}>Close</Button>
    //         </Link>
    //       </ModalFooter>
    //     </ModalContent>
    //   </Modal>
    //          </div>
    //       </div>
    // </div>
  )
}