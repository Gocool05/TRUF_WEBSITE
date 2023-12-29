import React from "react";
import "../style/turf.css";
import { Container, Flex, Text, Box } from "@chakra-ui/react";
import { PopoverProfile } from "./Popover";
import { Navigate } from "react-router-dom";



export const TurfNav = (prop) => {
  const { setTurf } = prop;
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
        <Flex
          direction="column"
          align="center"
          id="topNavturf"
          position="relative"
        >
          
          <Box
            id="turfNav"
            position={"absolute"}
            left={0}
            p={4}
            zIndex={1}
            justifyContent="space-evenly"
            alignContent="center"
          >  
            <img style={{ maxWidth: "40%", height: "auto",zIndex:1 }}
              src="https://res.cloudinary.com/dx78kzenz/image/upload/v1703314037/header-logo_faxbai.png"
              alt=""
            /> 
          </Box>
          <Box id="navBtns">
              <PopoverProfile />
              </Box>
          <Box >
          
            <video autoPlay muted loop id="bgVideo" style={{ width: "100%" }}>
              <source
                src="https://res.cloudinary.com/dx78kzenz/video/upload/v1702027513/fbvid1_snspps_0316c73aa3.mp4"
                type="video/mp4"
              />
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
              <Text
                fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}
                textAlign="center"
                fontWeight={"bold"}
                className="playball"
                mb={1}
              >
                WANNA PLAY BALL ?{" "}
                </Text>
                <Text
                color="#054775"
                  fontWeight="bold"
                  fontSize={{ base: "2xl", md: "3xl", lg: "6xl" }}
                >
                  BOOK YOUR `TURF` NOW
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  );
};
