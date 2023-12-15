// import React, { useEffect, useState } from 'react'
// import "../style/payment.css"
// import { useRazorpay } from 'react-razorpay/lib';

// export const Payment = () => {
//   const { createOrder, options } = useRazorpay();

//   const handlePayment = async () => {
//     const order = await createOrder(your_order_creation_data);
//     const rzp = new window.Razorpay(options);
  
//     rzp.on('payment.success', (response) => {
//       // Handle payment success
//       console.log(response);
//     });
  
//     rzp.on('payment.error', (error) => {
//       // Handle payment failure
//       console.log(error);
//     });
  
//     rzp.open();
//   };



//     const your_order_creation_data = {
//       amount: 50000, // amount in paise (e.g., 50000 paise = ₹500)
//       currency: 'INR',
//       receipt: 'order_rcptid_11',
//       payment_capture: 1,
//       notes: {
//         // Any additional notes or metadata you want to associate with the order
//         merchant_name: 'JGN TECH',
//       },
//       // Add other order details as needed
//     };





//   return (
    
//       <div>
//       <button onClick={handlePayment}>Pay</button>
//     </div>

//   )
// }