import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Alert,
  AlertIcon,
  Box,
  Input
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/Authcontext";
import { loadBundle } from "firebase/firestore";
import { ref, set } from "firebase/database";
import { database } from "../firebase-config/config";
import { onValue } from "firebase/database";
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key_here');

const time = [
  "A5:00 AM",
  "B7:00 AM",
  "C9:00 AM",
  "D4:00 PM",
  "E6:00 PM",
  "F8:00 PM",
  "G10:00AM",
];
export const TimeSelectModal = (prop) => {
  const { email } = prop;

  const { turf, id,setElement, setTime, setTurfName, turfName ,image} = prop;
  const { user } = useUserAuth();

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  const [bookedtime, setBookedTime] = useState([]);
  const [disable, setDisable] = useState(false);
  const [link, setlink] = useState(false);
  const [color,setColor] = useState(false)
  const [msg, setMsg] = useState(false);
  const [err, setErr] = useState(false);
  const [date,setDate] = useState("")
  const [timeSlots, setTimeSlots] = useState('');
  

  // const handleElement = () => {
  //   // Make sure turfName is defined before accessing its properties
  //   if (turfName && id && image) {
  //     console.log('Setting element data:', turfName, id, image);
  //     const elementData = { name: turfName, id, image};
  //     setElement(elementData);
  //     setTime(""); // You might want to initialize time here if needed
  //   }
  // };

  // const bookedTimeLs = localStorage.getItem("time", time);
  // console.log(bookedTime)
  const navigate = useNavigate();
  // add bookings to user account
  // function writeUserData(data) {
  //   set(ref(database, "users/" + user.uid), {
  //     data,
  //   });
  // }
  // const Leaveref = ref(database, `users/`);
  // useEffect(() => {
  //   let arr = [];
  //   onValue(Leaveref, (snapshot) => {
  //     const data = snapshot.val();
  //     const newLeave = Object.keys(data).map((key) => ({
  //       id: key,
  //       ...data[key],
  //     }));
  //     newLeave.map((ele) => {
  //      return arr.push(ele.data);
  //     });
  //   });
  //   // console.log(arr)
  //   setBookedTime(arr);
  // },[]);

  
  // if (link) {
  //   navigate("/payment");
  // }
  // useEffect(() => {
  //   if (user && link) {
  //     navigate("/payment");
  //   }
  // }, [user, link]);


  const handleSubmit = async (e) => {
    // e.preventDefault();
    const storedId = localStorage.getItem('apiResponse');
    // const parsedId = 0;
    // if (storedId) {
      const userId = parseInt(storedId, 10);
    // }
    try {
      // Check if there's an existing booking for the same time and date
      const existingBooking = await axios.get('http://localhost:1337/api/bookings', {
        params: {
          timeSlots,
          date,
          userId
        },
      });

      if (existingBooking.data.length > 0) {
        setErr('A booking already exists for this time and date.');
        // setSuccess(false);
      } else {
        // If no conflicting booking, proceed to create the booking
        const response = await axios.post('http://localhost:1337/api/bookings', {
          timeSlots,
          date,
          userId
        });

        if (response.status === 200) {
          // setSuccess(true);
          setErr('');
        }
      }
    } catch (err) {
      setErr('Failed to create booking. Please try again.');
      console.error(err);
    }
  };

  return (
    <>
      <Button
        colorScheme={"green"}
        onClick={() => {
          // handleElement();
          onOpen();
        }}
      >
        Book Now
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader className="headerModal">Date & Time </ModalHeader>
          <  ModalCloseButton className="closebtn" />
          <ModalBody>
            {/* <Box>
             
              {msg ? (
                <div className={msg ? "alertMsg" : "alertErr"}>
                  <Alert status="success">
                    <AlertIcon />
                    Booked successfully
                  </Alert>
                </div>
              ) : (
                <div className={err ? "errmsg" : "errFalse"}>
                  <Alert status="error">
                    <AlertIcon />
                     This Slot is already Booked
                  </Alert>
                </div>
              )}
            </Box> */}
            <Text fontWeight={"bold"} fontSize="45px" color={"green"}>Booking Your Turf</Text>
            <Text fontWeight={"bold"} fontSize="25px">Select Date</Text>
            <br/>
            <Input type={"date"} onChange={(e) => {
                const selectedDate = e.target.value; // Get the selected date in DD-MM-YYYY format
                const [month, day, year] = selectedDate.split('-'); // Split the date into day, month, and year
                const formattedDate = `${year}-${month}-${day}`; // Rearrange the date to YYYY-MM-DD format
                setDate(formattedDate); // Set the state with the formatted date
            }}
              required
            />
            <br/>
            <br/>
            <Text fontWeight={"bold"} fontSize="25px">
              Select Time
            </Text>
            <br/>
            <div id="timeButtons">
              {time.map((ele) => {
                return (
                  <Button
                    className="time"
                    onClick={() => {
                      setTime(ele);
                      handleSubmit(ele);
                      navigate("/payment");
                    }}
                  >
                    {ele.substring(1)}
                  </Button>
                );
              })}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};