import React from "react";
import "../style/turf.css";
import {BiCricketBall,BiFootball} from "react-icons/bi";
import { Button} from "@chakra-ui/react";
import { useUserAuth } from "../context/Authcontext";
import { PopoverProfile } from "./Popover";
import {
  Container,
  Flex,
  Text,
  Box
} from "@chakra-ui/react";

export const TurfNav = (prop) => { 
    const {setTurf} = prop
    const { user, logout } = useUserAuth();

    const handleLogout = async () => {
      try {
        await logout();
      } catch (err) {
        console.log(err.message);
      }
    };
   
  return (
    <>
      <Container maxW="full" p={0} overflow="hidden">
      <Flex direction="column" align="center" id="topNavturf" position="relative">
        <Box id="turfNav" position="absolute" top={0} left={0}>
          <img src="https://res.cloudinary.com/dx78kzenz/image/upload/v1702026704/logo_b49e2fa484.png" alt="" />
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
              YOU CAN CHOOSE{" "}
              <Text as="span" fontWeight="bold" color="green" fontSize={{ base: "xl", md: "3xl", lg: "6xl" }}>
                TURF
              </Text>
              <br />
              <Button
                variant={"ghost"}
                color="green"
                fontSize={{ base: "xl", md: "3xl", lg: "5xl" }}
                fontWeight="bold"
                rightIcon={<BiCricketBall color="white" />}
                onClick={() => setTurf("cricket")}
                colorScheme={"white"}
              >
                CRICKET
              </Button>{" "}
              or{" "}
              <Button
                variant={"ghost"}
                color="green"
                fontSize={{ base: "xl", md: "3xl", lg: "5xl" }}
                fontWeight="bold"
                rightIcon={<BiFootball color="white" />}
                onClick={() => setTurf("football")}
                colorScheme={"white"}
              >
                FOOTBALL
              </Button>
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Container> 
       </>
  );
};