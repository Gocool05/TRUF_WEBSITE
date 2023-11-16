import React, { useState } from "react";
import turfbg from "../images/fbvid1.mp4";
import logo from "../images/navlogo.png";


import "../style/turf.css";
import {BiSolidCricketBall,BiCricketBall,BiFootball,BiSolidEditLocation} from "react-icons/bi"
// import {IoFitness} from "react-icons/io5"
// import {IoIosBasketball} from "react-icons/io"
// import {GiTennisRacket} from "react-icons/gi"
// import {MdLocationOn} from "react-icons/md"
import { Button, Icon, Popover } from "@chakra-ui/react";
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
      <source src={turfbg} type="video/mp4" />
      Your browser does not support the video tag.
</video>
      </div>
      <div id="turfNavContainer">
        <div id="topNavturf">
          <div id="turfNav">
            <img src={logo} alt="" />
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
          {/* <p id="turfCity">
            Chennai <MdLocationOn fontWeight={"bold"} />
          </p> */}
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
