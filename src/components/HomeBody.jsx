import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Text, Image, Flex } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';
export const HomeBody = () => {
  return (
    <>
    <Text
        className='headingTurfz'
        fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
        textAlign="center"
        my={4}
      >
        <SunIcon mr={2} mb={2} boxSize={6} color="#ffc104"  alignContent="center" />
        Sunshine Turf
        <SunIcon ml={2} mb={2}  boxSize={6} color="#ffc104" alignContent="center" />
      </Text>
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align='center'
      justify='center'
      id='homeBody'
      p={4}
      
    >
      
      <Box id='ballImg' textAlign='center' flex='1'  mb={{ base: 10, md: 0 }}>
        <Image src="https://res.cloudinary.com/dx78kzenz/image/upload/v1702026706/Football1_bgcmr3_133d203472.png" alt='Football' maxWidth='100%' />
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
    </>
  );
};
