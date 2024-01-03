import React, { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { BookingSkeleton } from "../components/BookingSkeleton";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";
export const Bookings = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [add, setAdd] = useState("");
  const [responseTime, setResponseTime] = useState("");
  const [responseDate, setResponseDate] = useState("");
  const [email, setEmail] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [bookingsData, setbookingsData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://strapi.letstrydevandops.site/api/bookings?populate=users_permissions_user&filters[users_permissions_user][email][$eq]=${email}`
        );

        const extractedData = response.data.data.map(item => ({
          id: item.id,
          date: item.attributes.date,
          timeslots: item.attributes.timeslots,
          // Add other attributes you want to extract
        }));

        setbookingsData(extractedData);
        console.log(extractedData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error:", error);
        setLoading(false); // Set loading to false in case of an error
        setError("Error fetching data");
      }
    };
   
    setEmail(localStorage.getItem("emailId"));
    setName(localStorage.getItem("Name"));
    setLoading(true); // Set loading to true before data fetching
    fetchData(); // Call fetchData function inside useEffect
  }, [email]);
  const handlePosts = async () => {
    try {
      const response = await axios.get(
        `https://strapi.letstrydevandops.site/api/bookings?populate=users_permissions_user&filters[users_permissions_user][email][$eq]=${email}`
      );
  
      // Assuming you have an array declared before this function
      const bookingsData = response.data.data.map(item => ({
         id: item.id,
        date: item.attributes.date,
        timeslots: item.attributes.timeslots,
        // Add other attributes you want to extract
      }));
      // setbookingsData(bookingsData);
      // Now `bookingsData` contains an array with all the extracted data
      console.log(bookingsData);
    } catch (error) {
      // Handle error if the request fails
      console.error("Error:", error);
    }
  };
  
  // handlePosts();

  useEffect(() => {
    setEmail(localStorage.getItem("emailId"));
    setName(localStorage.getItem("Name"));
  }, []);

  const handleCancel = async (id) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to cancel the booking?"
    );

    if (userConfirmed) {
      try {
        const response = await axios.delete(
          `https://strapi.letstrydevandops.site/api/bookings/${id}`
        );
        console.log(response);
        setbookingsData(prevBookingsData => prevBookingsData.filter(booking => booking.id !== id));
        navigate("/turf");
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Cancellation was canceled by the user");
    }
  };

  const BookingDiv = () => {
    
    if (bookingsData.length > 0) {
      return ( 
      <div id="bookingContainers">
          {bookingsData.map((booking, index) => (
            <Card key={index} className="bookingCard" id={`bookingDetails${index}`} align="center">
              <CardHeader className="cardHeader">
                <Heading color={"white"}>Cricket/Football</Heading>
              </CardHeader>
              <CardBody id={`bookingImageBox${index}`}>
                <Image  
                  objectFit="cover"
                  borderRadius={"10px"}
                  marginBottom={"10px"}
                  height={"300px"}
                  width="auto"
                  src="https://res.cloudinary.com/dx78kzenz/image/upload/v1704278396/cricket_football_i9ouek.jpg"
                  alt="image"
                />
                <Text fontSize={"20px"} fontWeight={"bold"} textTransform="uppercase">Time : {booking.timeslots.substring(1)}</Text> 
                <Text fontSize={"20px"} fontWeight={"bold"} textTransform="uppercase" >Date : {booking.date}</Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="blue" onClick={() => handleCancel(booking.id)}>
                  Cancel Booking
                </Button>
              </CardFooter>
            </Card>
          )
          )}
        </div>
      );
    } else {
      return (
        <Text
          fontSize={"50px"}
          textAlign="center"
          marginTop={"50px"}
          fontWeight="bold"
        >
          No bookings found
        </Text>
      );
    }
  };

  return (
    <div id="bookingContainer">
      <div >
        <Link to={"/turf"}>
          <IoMdArrowRoundBack fontWeight={"bold"} fontSize="30px" />
        </Link>
        <Text
          color="#033153"
          textAlign="center"
          fontSize="50px"
          fontWeight={"bold"} 
          textTransform="uppercase"
          mb={4}
        >
          {name}'s Bookings
        </Text>
      </div>
      {loading ? <BookingSkeleton /> : <BookingDiv />}
    </div>
  );
};
