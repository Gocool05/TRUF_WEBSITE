// import React, { useEffect } from "react";
// import axios from "axios";

// const Pay = () => {
//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //       const params = new URLSearchParams(document.location.search);
//     //       console.log(params);
    
//     //       // Check if "sessionId" is present in the query parameters
//     //       if (!params.has('sessionId')) {
//     //         console.error('sessionId is missing from the URL parameters.');
//     //         return;
//     //       }
    
//     //       const checkoutSessionId = params.get('sessionId');
//     //       console.log('checkoutSessionId:', checkoutSessionId);
//     //       try {
//     //         const response = await axios.get('https://strapi.letstrydevandops.site/strapi-stripe/retrieveCheckoutSession/${checkoutSessionId}');
//     //         // Handle the response data as needed
//     //         console.log(response.data);
//     //       } catch (error) {
//     //         // Handle errors
//     //         console.error(error); 
//     //       }
//     //     };
    
//     //     fetchData();
//     //   }, []); // Empty dependency array to run the effect only once on mount

//   return (
//     <div>
//       {/* <button
//         type="button"
//         className="SS_ProductCheckout"
//         data-id="3"
//         data-email="ajay@gmail.com"
//         data-url="https://strapi.letstrydevandops.site"
//       >
//         {" "}
//         BuyNow{" "}
//       </button> */}
//     <button
//         type="button"
//         className="SS_ProductCheckout"
//         data-id='6' data-email='ajay@gmail.com'
//         data-url="https://strapi.letstrydevandops.site"> 
//         BuyNow 
//     </button>
//     </div>
//   );
// };

// export default Pay;