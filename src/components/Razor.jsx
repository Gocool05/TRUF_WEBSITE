import React, { useEffect, useRef } from 'react';

const RazorpayComponent = ({ isOpen, onClose }) => {
  const razorpayContainerRef = useRef();

  useEffect(() => {
    console.log('RazorpayComponent is mounted.');
    const formElement = document.getElementById('razorpay-form');
    console.log('Form element:', formElement);
    const loadRazorpayScript = async () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.async = true;
      script.id = 'razorpay-script';
      script.setAttribute('data-payment_button_id', 'pl_N3TjLpP34wEz2s');

      script.onload = () => {
        setTimeout(initializeRazorpay, 100);
      };

      script.onerror = () => {
        alert("Failed to load Razorpay script. Please try again later.");
      };

      const formElement = document.getElementById('razorpay-form');
      if (formElement) {
        formElement.appendChild(script);
      } else {
        console.error("Form with ID 'razorpay-form' not found.");
      }
    };

    const initializeRazorpay = () => {
      console.log('Initializing Razorpay...');
      // Your existing initialization code
      
    };

    loadRazorpayScript();

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.getElementById('razorpay-script');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return <form id="razorpay-form" ref={razorpayContainerRef} />;
};

export default RazorpayComponent;
