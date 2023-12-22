import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Stack,
} from '@chakra-ui/react';
import RazorpayComponent from './Razor';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const TimeSelectModal = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [updatedDate, setupdatedDate] = useState(null);
  const [updatedTime, setupdatedTime] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [isAlreadyBooked, setIsAlreadyBooked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);
  const toast = useToast();


 





  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // const handleTimeChange = (time) => {
  //   setSelectedTime(time);
  //   console.log(time);
  //   console.log(selectedTime);
  // };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const time = [
    "A09:00AM",
    "B10:00AM",
    "C11:00AM",
    "D12:00PM",
    "E01:00PM",
    "F02:00PM",
    "G03:00PM",
    "H04:00PM",
    "I05:00PM"
  ];

  

  

  const handleBookingSubmit = async () => {
    const selectedDateTime = `${selectedDate} ${selectedTime}`;
  
    const isAlreadyBooked = bookings.some(booking => {
      return booking.attributes.date === selectedDate && booking.attributes.timeslots === selectedTime;
    });

    setIsAlreadyBooked(isAlreadyBooked);

    if (isAlreadyBooked) {
      alert('This date and time slot is already booked. Please choose another.');
      // Handle the case when the slot is already booked
    } else {
      try {
        // Separate async function for the post request
        const handleBookingPost = async () => {
          console.log(selectedDate,selectedTime)

          const response = await axios.post( 'https://strapi.letstrydevandops.site/api/bookings',
            {
              "data":{
                timeslots: selectedTime,
                date: selectedDate, 
                payment_id: '123456789',
                user:'hello'
              }
             
              // Add other data you want to send
            }
          );
  
          if (response.status === 200) {
            // Add your logic for successful booking
            alert('Booking Successful!');
          }
        };
  
        // Call the async function
        await handleBookingPost();
      } catch (error) {
        // Handle the error when the post request fails
        if(error.response.data.error.status == 400){
          setupdatedDate(selectedDate);
          setupdatedTime(selectedTime);
          
        }
        if(error.response.data.error.status == 500){
          
        toast({
        title: 'Already booked',
        status: 'error',
        position: 'top-right',
        duration: 5000, // Display duration in milliseconds
        isClosable: true,
      });

        }
      }
    }
  };
  // const handleTimeButtonClick = (ele) => {
  //   // handleTimeChange(ele);
  //   handleBookingSubmit();
  // };
  useEffect(() => {
    // This useEffect will be triggered whenever selectedTime changes
    handleBookingSubmit();
  }, [selectedTime]);
  
  const handleSubmit = (e)=>{
    // e.preventDefault();
     const amount = 800;
      var options = {
        key: "rzp_test_PoAoGSZFB5kaIL",
        key_secret:"LoRb2fuxCntmq05IW6iJCHNS",
        amount: amount *100,
        currency:"INR",
        name:"STARTUP_PROJECTS",
        description:"for testing purpose",
        handler: async function (Paymentresponse){
          const response = await axios.post( 'https://strapi.letstrydevandops.site/api/bookings',
          {
            "data":{
              timeslots: updatedTime, 
              date: updatedDate, 
              payment_id: Paymentresponse.razorpay_payment_id,
              user:'hello'
            }
           
            // Add other data you want to send
          }
        );
        toast({
          title: 'Booking Successful!',
          status: 'success',
          position: 'top-right',
          duration: 5000, // Display duration in milliseconds
          isClosable: true,
        });
        },
        prefill: {
          name:"GOCOOL",
          email:"GOCOOL@gmail.com",
          contact:"8888888888"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    
  }

  
  return (
    <>
      <Button colorScheme="blue" onClick={handleOpen}>
        Book Now
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader  fontSize={32} backgroundColor='#092635' color='white' >BOOK TURF</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl id="booking-form">
                <FormLabel fontSize={20} >Date:-</FormLabel>
                <input style={{width:'100%', border:'3px groove #C3E2C2', borderRadius:'10px' ,padding:'10px'}} type="date" onChange={handleDateChange} />
              </FormControl>

              <FormControl id="booking-form">
                <FormLabel fontSize={20}>Select time:-</FormLabel>
                <div id="timeButtons">
                  {time.map((ele) => (
                    <Button

                      key={ele}
                     style={{ backgroundColor: ele === selectedTime ? "green" : "white", color: ele === selectedTime ? "white" : "black",border:'3px inset #C3E2C2' }}
                      className="timebutton"
                       onClick={() => {setSelectedTime(ele);}}
                    >
                      {ele.substring(1)}
                    </Button>
                  ))}
                </div>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button  mr={3} onClick={handleClose}>
              Close
            </Button>
            {/* Conditionally render RazorpayComponent */}
            <Button colorScheme="green"  onClick={handleSubmit} disabled={isAlreadyBooked}>
              Pay Now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TimeSelectModal;
