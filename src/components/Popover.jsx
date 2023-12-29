import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export const PopoverProfile = (prop) => {
  
  const { name, email, handleLogout, image } = prop;

  const navigate = useNavigate();
  const emailId = localStorage.getItem('emailId');

  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme={"blue"}>
          {<AiOutlineUser fontSize={"22px"} />}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight={"bold"} color="black">
          
          Welcome {emailId}
        </PopoverHeader>
        <PopoverBody display={"grid"} gap="20px">
          <Button
            colorScheme={"blue"}
            width="100%"
            onClick={() => navigate("/booking")}
          >
            Bookings
          </Button>
          <Button colorScheme={"blue"} onClick={() => navigate("/login")}>
            Logout
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};