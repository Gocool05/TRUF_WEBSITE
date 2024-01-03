import React, { useEffect, useState } from "react";
import turfData from "./data";
import { Loading } from "./Loading";
import { Box, Text, Image, Flex, Container, Button } from "@chakra-ui/react";
import TimeSelectModal from "./TimeSelectModal";
import { SunIcon } from '@chakra-ui/icons';
import { BookingSkeleton } from "./BookingSkeleton";

export const Turfdata = () => {
  const [element, setElement] = useState({});
  const [time, setTime] = useState("");
  const [turfName, setTurfName] = useState("");
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate an API call or data loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (Loading) {
    return (
      <Container id="turfContainer" centerContent>
        <BookingSkeleton />
      </Container>
    );
  }

  return (
    <Container id="turfContainer1" >
      <Text
        id="headingTurf"
        fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}
        textAlign="center"
        fontWeight="bold"
        my={4}
      >
        <SunIcon  mr={2} mb={2} boxSize={6} color="#ffc104"  alignContent="center" />
        Book Your Turf
        <SunIcon  ml={2} mb={2}  boxSize={6} color="#ffc104" alignContent="center" />
      </Text>

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-evenly"
      >
        {turfData.map((turf) => (
          <Box id="turfBox" key={turf.id} maxW="md" mx={4} my={4}>
            <Box id="listingImg" width={300}>
              <Image src={turf.image} alt="" />
            </Box>
            <Text id="turfName" fontSize="lg" fontWeight="bold" my={2}>
              {turf.turfName}
            </Text>
            <Text
              id="turfAddress"
              fontSize="sm"
              marginBottom={2}
              color="white"
            >
              {turf.turfAddress}
            </Text>
      <TimeSelectModal />
          
          </Box>
        ))}
      </Flex>
    </Container>
  );
};
