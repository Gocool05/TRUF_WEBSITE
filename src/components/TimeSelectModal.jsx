import React, { useState } from 'react';
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

const TimeSelectModal = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const time = ["A5:00AM", "B6:00AM", "C7:00AM", "D8:00PM", "E9:00PM", "F10:00PM", "G11:00AM"];

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
              <FormControl id="booking-form">
                <FormLabel>Date</FormLabel>
                <input type="date" onChange={handleDateChange} />
              </FormControl>

              <FormControl id="booking-form">
                <FormLabel>Select time</FormLabel>
                <div id="timeButtons">
                  {time.map((ele) => (
                    <Button key={ele} className="time" onClick={() => handleTimeChange(ele)}>
                      {ele.substring(1)}
                    </Button>
                  ))}
                </div>
              </FormControl>
            </Stack>
          </ModalBody>
          
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClose}>
              Close
            </Button>
            {/* Conditionally render RazorpayComponent */}
            {isOpen && <RazorpayComponent isOpen={isOpen} onClose={handleClose} />}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TimeSelectModal;