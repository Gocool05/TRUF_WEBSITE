import React, { useState,useEffect } from "react";

const RazorpayComponent = ({amount, onSuccess}) => {
  useEffect(() => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY',
      amount: amount * 100, // amount in paisa
      currency: 'INR',
      name: 'STARTUP_PROJECTS',
      description: 'For testing purpose',
      handler: function (response) {
        onSuccess(response);
      },
      prefill: {
        name: 'Velmurugan',
        email: 'mvel1620r@gmail.com',
        contact: '7904425033',
      },
      notes: {
        address: 'Razorpay Corporate office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const payment = new window.Razorpay(options);
    payment.open();

    // Cleanup function
    return () => {
      payment.clear();
    };
  }, [amount, onSuccess]);

  return <></>; // Razorpay component doesn't have any UI
};


export default RazorpayComponent;
