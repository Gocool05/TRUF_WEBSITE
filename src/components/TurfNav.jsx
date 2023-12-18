import React from "react";
import "../style/turf.css";
import {
  Container,
  Flex,
  Text,
  Box
} from "@chakra-ui/react";

export const TurfNav = (prop) => { 
    const {setTurf} = prop
    // const {  logout } = useUserAuth();

    // const handleLogout = async () => {
    //   try {
    //     await logout();
    //   } catch (err) {
    //     console.log(err.message);
    //   }
    // };
   
  return (
    <>
      <Container maxW="full" p={0} overflow="hidden">
      <Flex direction="column" align="center" id="topNavturf" position="relative">
        <Box id="turfNav" position="absolute" top={0} left={0} 
        p={4}
        zIndex={1}  // Use a specific zIndex value
        width='50%' // Use "auto" to maintain the image's intrinsic size
        height="auto"
        >
          <img src="https://res.cloudinary.com/dx78kzenz/image/upload/v1702903503/turfzlogo_aenw8e.png" alt="" />
        </Box>
        <Box>
          <video autoPlay muted loop id="bgVideo" style={{ width: "100%" }}>
            <source src="https://res.cloudinary.com/dx78kzenz/video/upload/v1702027513/fbvid1_snspps_0316c73aa3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Flex
            direction="column"
            align="center"
            justify="center"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="100%"
          >
            <Text fontSize={{ base: "xl", md: "3xl", lg: "6xl" }} textAlign="center" fontWeight={"bold"} color="white" mb={2}>
            WANNA PLAY BALL ?{" "}
              <Text  fontWeight="bold" color="green" fontSize={{ base: "xl", md: "3xl", lg: "6xl" }}>
              BOOK YOUR `TURF` NOW
              </Text>
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Container> 
       </>
  );
};