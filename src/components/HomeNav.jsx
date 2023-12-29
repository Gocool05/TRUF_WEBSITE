import React from "react";
import { Link } from "react-router-dom";
import { Container, Flex, Box, Button, Text } from "@chakra-ui/react";
import zIndex from "@mui/material/styles/zIndex";

export const HomeNav = () => {
  return (
    <Container maxW="full" p={0} position="relative">
      <Box
        position="absolute"
        top={0}
        left={0}
        p={4}
        zIndex={1} // Use a specific zIndex value
        // Use "auto" to maintain the image's intrinsic size
        height="auto" // Set a fixed height for the logo
      >
        <img
          src="https://res.cloudinary.com/dx78kzenz/image/upload/v1703314037/header-logo_faxbai.png"
          alt="navlogo"
          style={{ maxWidth: "40%", height: "auto" }}
        />
      </Box>
      <Box id="Home" position="relative" overflow="hidden">
        <video autoPlay muted loop id="bgVideo" style={{ width: "100%" }}>
          <source
            src="https://res.cloudinary.com/dx78kzenz/video/upload/v1702026721/nav_video_0ca4df27a0.mp4"
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
          <Text  className="homeHeading"
                  fontWeight="bold"
                  fontSize={{ base: "2xl", md: "3xl", lg: "6xl" }}>
            BOOK YOUR GROUND ONLINE WITH US
          </Text>
          <Link to={"/login"}>
            <Button id="loginSignupBtn" mb={4}>
              LOGIN/SIGNUP
            </Button>
          </Link>
        </Flex>
      </Box>
    </Container>
  );
};
