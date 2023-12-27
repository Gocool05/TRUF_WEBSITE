import React, { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
// import { useUserAuth } from "../context/Authcontext";
// import { ref, onValue ,remove} from "firebase/database";
// import { database } from "../firebase-config/config";
import { Button, Text } from "@chakra-ui/react";
// import { PopoverProfile } from "../components/Popover";
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
export const Bookings = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [add, setAdd] = useState("");
  const [responseTime, setResponseTime] = useState("");
  const [responseDate, setResponseDate] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePost = async () => {
    try {
      const response = await axios.get(
        `https://strapi.letstrydevandops.site/api/bookings?populate=users_permissions_user&filters[users_permissions_user][email][$eq]=${email}`
      );
      // Assuming you have an array declared before this function

      setResponseTime(response.data.data[0].attributes.timeslots);
      setResponseDate(response.data.data[0].attributes.date);
      console.log(response);
    } catch (error) {
      // Handle error if the request fails
      console.error("Error:", error);
    }
  };

  // Call the function to initiate the post request
  handlePost();

  useEffect(() => {
    setEmail(localStorage.getItem("emailId"));
  }, []);

  const handleCancel = async () => {
    const userConfirmed = window.confirm(
      "Are you sure you want to cancel the booking?"
    );

    if (userConfirmed) {
      try {
        const response = await axios.delete(
          `https://strapi.letstrydevandops.site/api/bookings/58`
        );
        console.log(response);
        navigate("/turf");
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Cancellation was canceled by the user");
    }
  };

  const BookingDiv = () => {
    if (responseDate.length < 1) {
      return (
        <Card id="bookingsDetails" align="center">
          <CardHeader className="cardHeader" color={"white"} textTransform="uppercase">
            <Heading size="xl">{email}</Heading>
          </CardHeader>
          <CardBody id="bookingImageBox">
            <Image
              objectFit="cover"
              borderRadius={"10px"}
              src="https://res.cloudinary.com/dx78kzenz/image/upload/v1700478238/ball_ezzhpr.png"
              alt="image"
            />
            <Text>Time : {responseTime.substring(1)}</Text>
            <Text>Date : {responseDate}</Text>
          </CardBody>
          <CardFooter>
            <Button onClick={handleCancel}>Cancel Booking</Button>
          </CardFooter>
        </Card>
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
    <div>
      <div id="paymentNav">
        <Link to={"/turf"}>
          <IoMdArrowRoundBack fontWeight={"bold"} fontSize="30px" />
        </Link>
        <Text
          color={"Green"}
          textAlign="center"
          fontSize="50px"
          fontWeight={"bold"}
          textTransform="uppercase"
        >
          My Bookings
        </Text>
      </div>
      {loading ? <BookingSkeleton /> : <BookingDiv />}
    </div>
  );
};
