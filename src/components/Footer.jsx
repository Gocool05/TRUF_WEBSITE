import React from "react";
import { Box, Text, HStack, Flex } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box  id="footer" textAlign="center" py={8}  color="white">
    <Flex direction={{ base: 'column', md: 'coulmn', lg: 'column' }}
    p={4}
    align='center'
    >
      <Text flex='1' style={{textShadow:"0px 0px 13px rgba(0, 0, 0, 1)"}}  fontSize={{ base: "xl", md: "2xl", lg: "3xl"  }} mb={4}>
        FIND AND BOOK YOUR NEAREST{" "}
        <span style={{ color: "#ffc104",fontWeight: "bold",textShadow:"0px 0px 13px rgba(0, 0, 0, 1)" }}>TURF</span> JUST A CLICK AWAY!
      </Text>
      <HStack  flex='1' spacing={4} justify="center">
        <FaFacebook size={24} />
        <FaInstagram size={24} />
        <FaLinkedin size={24} />
      </HStack>
      </Flex>
    </Box>
    
  );
};
