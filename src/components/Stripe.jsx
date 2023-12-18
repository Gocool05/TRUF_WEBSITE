// import React from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// const Stripe = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Confirm the payment when the submit button is clicked
//     const { paymentMethod, error } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });

//     if (error) {
//       console.error(error);
//     } else {
//       // Send the payment method ID to your server
//       fetch('/api/payment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ payment_method_id: paymentMethod.id }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//         });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };

// export default Stripe;
