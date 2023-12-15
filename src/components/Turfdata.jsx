import React, { useEffect, useState } from "react";
import turfData from "./data";
import { Loading } from "./Loading";
import { Box, Text, Image, Flex, Container, Button } from "@chakra-ui/react";
import TimeSelectModal from "./TimeSelectModal";

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
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container>
      <Text
        id="headingTurf"
        fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}
        textAlign="center"
        my={4}
      >
        Book Your Turf
      </Text>

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
      >
        {turfData.map((turf) => (
          <Box id="turfBox" key={turf.id} maxW="md" mx={4} my={4}>
            <Box id="listingImg" width={200}>
              <Image src={turf.image} alt="" />
            </Box>
            <Text id="turfName" fontSize="lg" fontWeight="bold" my={2}>
              {turf.turfName}
            </Text>
            <Text
              id="turfAddress"
              fontSize="sm"
              marginBottom={2}
              color="gray.600"
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
