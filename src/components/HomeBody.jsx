import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Text, Image, Flex } from '@chakra-ui/react';

export const HomeBody = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align='center'
      justify='center'
      id='homeBody'
      p={4}
      
    >
      <Box id='ballImg' textAlign='center' flex='1'  mb={{ base: 10, md: 0 }}>
        <Image src="https://res.cloudinary.com/dx78kzenz/image/upload/v1700478243/Football1_bgcmr3.png" alt='Football' maxWidth='100%' />
      </Box>
      <Box id='ballingText' textAlign='left' flex='1' gap={6}>
        <Text id='bodyheading' fontSize={{base: "xs", md: "lg", lg: "2xl" }} color='blackAlpha.800'>
          FIND AND BOOK YOUR NEAREST TURF, JUST A CLICK AWAY!
        </Text>
        <Text fontSize={{ base: "xs", md: "sm", lg: "xl" }} textAlign='left' color="black">
        Welcome to our premier turf booking service, where your passion for sports meets the convenience of online reservations. We understand the importance of finding the perfect turf for your game, and we've streamlined the process to make it as effortless as possible.
          </Text>
        <Link to='/login'>
        <Button id="loginSignupBtn" mb={4}>
              LOGIN/SIGNUP
            </Button>
        </Link>
      </Box>
    </Flex>
  );
};
