import React, { useState,} from 'react';

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Select,
  Input,
  Stack,
} from '@chakra-ui/react';

const TimeSelectModal = () => {
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // const timeOptions = generateTimeOptions(); // Function to generate time options

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    checkButtonStatus(event.target.value, selectedTime);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    checkButtonStatus(selectedDate, time);
  };


  const checkButtonStatus = (date, time) => {
    setIsButtonDisabled(!date || !time);
  };
  const emailId = localStorage.getItem('emailId');
  const userID = localStorage.getItem('apiResponse');
  const handleBookNow = async () => {
    try {
      console.log(selectedDate);
      console.log(selectedTime);
      console.log(userID);

      // Make a request to your Strapi backend to book the turf
      const response = await fetch('https://strapi.letstrydevandops.site/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data:{
            users_permissions_user:userID,
            date: selectedDate,
            timeslots: selectedTime
          }
        }),
      });

      if (response.ok) {
        // Booking successful, handle accordingly
        alert('Booking successful!');
      } else {
        // Booking failed, handle accordingly
        alert('Booking failed');
      }
    } catch (error) {
      alert('Error booking turf:', error);
    } finally {
      // Close the modal regardless of the booking result
      handleClose();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const time = [
    "A5:00AM",
    "B6:00AM",
    "C7:00AM",
    "D8:00PM",
    "E9:00PM",
    "F10:00PM",
    "G11:00AM",
  ];
 
  // function generateTimeOptions() {
  //   const startHour = 10; // Starting hour
  //   const endHour = 22;   // Ending hour
  //   const timeOptions = [];

  //   for (let hour = startHour; hour <= endHour; hour++) {
  //     const label = `${hour}:00 - ${hour + 1}:00`;
  //     const value = `${hour}:00`;
  //     timeOptions.push({ label, value });
  //   }

  //   return timeOptions;
  // }

  return (
    <>
      <Button colorScheme="blue" onClick={handleOpen}>
        Book Now
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book Turf</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              
              <FormControl>
                <FormLabel>Date</FormLabel>
                <input type="date" onChange={handleDateChange} />
              </FormControl>

              <FormControl>
                <FormLabel>Select time</FormLabel>
                <div id="timeButtons">
  {time.map((ele) => {
    const label = ele[1];
    const timeWithoutLabel = ele.substring(1);

    return (
      <Button
        className="time"
        onClick={() => handleTimeChange(ele)}
      >
        {timeWithoutLabel}
      </Button>
    );
  })}
</div>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={handleBookNow} disabled={isButtonDisabled}>
              Book Now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default TimeSelectModal