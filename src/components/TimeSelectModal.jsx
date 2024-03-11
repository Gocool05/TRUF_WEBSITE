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
  Alert
} from '@chakra-ui/react';
import RazorpayComponent from './Razor';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const TimeSelectModal = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [isDisableValid, setIsDisableValid] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);
  const [updatedDate, setupdatedDate] = useState(null);
  const [updatedTime, setupdatedTime] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [isAlreadyBooked, setIsAlreadyBooked] = useState(false);
  const [isDateValid, setIsDateValid] = useState(false);
  const [isTimeSelected, setIsTimeSelected] = useState(false);
  
  
  const toast = useToast();
  
  
  
  
  const date = new Date();
  
  
  const convertHourTo12HourFormat = (hour24) => {

    let hour = parseInt(hour24, 10) % 12 || 12; // Convert 0 to 12 for 12-hour clock
    let suffix = hour24 >= 12 ? 'PM' : 'AM';
    // console.log(${hour}${suffix});
    return `${hour}${suffix}`;
  };
  
  console.log(convertHourTo12HourFormat(date.getHours()));

  
  
  console.log(new Date().toISOString().split('T')[0]);
  
  const handleDateChange = (event) => {
    const inputDate = event.target.value;
      setSelectedDate(inputDate);

  // Check if the selected date is valid (you can customize the validation logic)
  // const isValid = selectedDate !== null ;
  if(selectedDate !== null){
  setIsDateValid(true);
  }

};
// console.log(new Date().toISOString().split('T')[0]);
console.log(selectedDate);

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
  const indexTime = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM"
  ]
  const isDisabled = (index) => {
    
    const condition1 = index <= indexTime.indexOf(convertHourTo12HourFormat(new Date().getHours()));
    const condition2 = indexTime.indexOf(convertHourTo12HourFormat(new Date().getHours())) == -1;
    const condition3 = selectedDate === new Date().getDate();
    // Replace with your own condition

  console.log(condition3);
    // Combining conditions using logical operators
    return ((condition1 || condition2 ) && condition3 ); 
  };
   console.log(new Date());
 
  
  const handleBookingSubmit = async () => {

    
      try {
        // Separate async function for the post request
        const handleBookingPost = async () => {
          console.log(selectedDate,selectedTime)
          const userId = localStorage.getItem('userId');
          const response = await axios.post( 'https://strapi.letstrydevandops.site/api/bookings',
            {
              "data":{
                timeslots: selectedTime,
                date: selectedDate, 
                payment_id: '123456789',
                users_permissions_user:userId
              }
              // Add other data you want to send
            },
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
          setIsAlreadyBooked(true);
        toast({
        title: 'Already booked',
        status: 'error',
        position: 'top',
        duration: 5000, // Display duration in milliseconds
        isClosable: true,
      });

        }
      }
    
  };
 
  useEffect(() => {
    // This useEffect will be triggered whenever selectedTime changes
    handleBookingSubmit();
  }, [selectedTime]);
  
  const handleSubmit = (e)=>{
    // e.preventDefault();
    handleClose();
     const amount = 800;
      var options = {
        key: "rzp_test_PobPK3zfVcGaiC",
        key_secret:"I3hhJiFBImipx7noTrO0kvOo",
        amount: amount *100,
        currency:"INR",
        name:"SUNSHINE_TURF_DEMO",
        description:"for testing purpose",
        handler: async function (Paymentresponse){

         const email= localStorage.getItem('emailId');
         const userId = localStorage.getItem('userId');
          const response = await axios.post( 'https://strapi.letstrydevandops.site/api/bookings',
          {
            "data":{
              timeslots: updatedTime, 
              date: updatedDate, 
              payment_id: Paymentresponse.razorpay_payment_id,
              users_permissions_user:userId
            }
           
            // Add other data you want to send
          }

        );
        handleClose();
        toast({
          title: 'Booking Successful!',
          status: 'success',
          position: 'top',
          duration: 5000, // Display duration in milliseconds
          isClosable: true,
          
        }
        );
        
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
  console.log(indexTime.indexOf(convertHourTo12HourFormat(new Date().getHours())));
  const currentDate = new Date().toISOString().split('T')[0]
  
  return (
    <>
      <Button colorScheme="blue" onClick={handleOpen}>
        Book Now
      </Button>

      <Modal  closeOnOverlayClick={false} isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader  fontSize={32} backgroundColor='#054775' color='white' >BOOK TURF</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl id="booking-form">
                <FormLabel fontSize={20} >Date:-</FormLabel>
                <input style={{width:'100%', border:'3px groove #054775', borderRadius:'10px' ,padding:'10px'}} type="date" min={currentDate}  onChange={handleDateChange} />
              </FormControl>

              <FormControl id="booking-form">
                <FormLabel fontSize={20}>Select time:-</FormLabel>
                <div id="timeButtons">
                  {time.map((ele,index) => (
                    <Button

                      key={ele}
                     style={{ backgroundColor: ele === selectedTime ? "#fdc300" : "white", color: ele === selectedTime ? "white" : "black",border:'3px inset #054775' }}
                      className="timebutton"
                       onClick={() => {setSelectedTime(ele); setupdatedTime(null)}}
                       const dates = {selectedDate}
                    isDisabled = {isDisabled(index)}>
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
            <Button colorScheme="blue"  onClick={handleSubmit} isDisabled= {updatedTime === null || selectedDate=== null }>
              Pay Now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TimeSelectModal;