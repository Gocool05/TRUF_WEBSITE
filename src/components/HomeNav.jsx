import React from "react";
import homebg from "../images/fbvid.mp4";
import navLogo from "../images/navlogo.png";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const HomeNav = () => {
  return (
    <>
      <div id="Home">
        {/* <div id="bgImg">
          <video src={homebg} alt="homebg" />
        </div> */}
        <video autoPlay muted loop id="bgVideo">
  <source src={homebg} type="video/mp4" />
  Your browser does not support the video tag.
</video>

        <div id="homenav">
          <div id="navLogo">
            <img src={navLogo} alt="navlogo" />
          </div>
          <div >
            <Link to={"/login"}>
              <Button id="loginSignupBtn" >LOGIN/SIGNUP</Button>
            </Link>
          </div>
        </div>
        <div id="homeTxt">
          <p>
            FIND AND BOOK YOUR NEAREST{" "}
            <span style={{ color: "red" }}>TURF</span> JUST A CLICK AWAY!
          </p>
        </div>
      </div>
    </>
  );
};
