import React from "react";
import "../style/turf.css";
import {BiCricketBall,BiFootball} from "react-icons/bi";
import { Button} from "@chakra-ui/react";
import { useUserAuth } from "../context/Authcontext";
import { PopoverProfile } from "./Popover";

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
      <div id="turfnavbg">
      <video autoPlay muted loop id="bgVideo">
      <source src='https://res.cloudinary.com/dx78kzenz/video/upload/v1700478280/fbvid1_snspps.mp4' type="video/mp4" />
      Your browser does not support the video tag.
</video>
      </div>
      <div id="turfNavContainer">
        <div id="topNavturf">
          <div id="turfNav">
            <img src='https://res.cloudinary.com/dx78kzenz/image/upload/v1700478254/navlogo_sfnmmj.png' alt="" />
          </div>
          <div id="navBtns">
            <PopoverProfile handleLogout={handleLogout} email={user.email}/>
          </div>
        </div>
        <div id="midNavTurf">
          <p style={{
                fontSize: "100px",
              }} >Your Nearest <br/>Sports <span style={{
                color: "Green",
                fontSize: "100px",
              }} >Turf</span></p>
          
        </div>
        <div id="botNavTurf">
        
          <Button
            variant={"ghost"}
            color="Green"
            fontSize={"2em"}
            fontWeight="bold"
            rightIcon={<BiCricketBall color="white" />}
            onClick={()=>setTurf("cricket")}
             colorScheme={"white"}
          >
            CRICKET
          </Button>
          {/* <img className="cricketNav" src={Cricket} alt="" /> */}
          <p id="botNavText">
            Choose Your GAME {" "}
            <span
              style={{
                color: "Green",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* LOCATION <MdLocationOn /> */}
            </span>
            </p>
            {/* <img className="footballNav" src={Football} alt="" /> */}
          <Button
            variant={"ghost"}
            color="Green"
            fontSize={"2em"}
            fontWeight="bold"
            rightIcon={<BiFootball color="white" />}
            onClick={()=>setTurf("football")}
             colorScheme={"white"}
          >
            FOOTBALL
          </Button>
          
        </div>
      </div>
    </>
  );
};
