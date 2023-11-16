import React, { useEffect, useState } from "react";
import turfData from "./data";
import { TimeSelectModal } from "./TimeSelectModal";
import { Loading } from "./Loading";

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
    <div id="turfContainer">
         {/* <Loading/> */}
         <p>Loading...</p>
      </div>
  );
}
 
  return (
    <div>
      <p id="headingTurf">Book Your Turf</p>
      <div id="turfContainer">
      
      {turfData.map((turf) =>(
        <div id="turfBox" key={turf.id}>
            <div id="turfBox">
              <div id="listingImg">
                <img src={turf.image} alt="" />
              </div>
              <p id="turfName">{turf.turfName}</p>
              <p id="turfAddress">{turf.turfAddress}</p>
              <TimeSelectModal
       turfId={turf.id}
       turfName={turf.turfName}
       turfImage={turf.image}
       setTurfName={setTurfName}
       setElement={setElement}
       setTime={setTime}
      />
      </div>
      </div>
      
     ))}

       </div>
    </div>
  );
};
