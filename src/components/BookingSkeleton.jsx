import React from "react";
import {
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
export const BookingSkeleton = () => {
  return (
    <Stack w={"100%"} margin="auto" marginTop={"20px"}>
    <Text  fontSize="30px" fontWeight="bolder" color={"black"}  textTransform={"uppercase"}>Loading...</Text>
      <Skeleton height="30px" w="90%" />
      <Skeleton height="50px" w="90%"/>
      <Skeleton height="300px" w={"90%"} />
      <Skeleton height="50px" w="90%"/>
    </Stack>
  );
};
