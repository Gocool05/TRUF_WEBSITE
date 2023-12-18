import React, { useEffect, useRef } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const RazorpayComponent = ({ isOpen, onClose }) => {
  const razorpayContainerRef = useRef();

  useEffect(() => {
    const loadRazorpayScript = async () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.async = true;
      script.id = 'razorpay-script';
      script.setAttribute('data-payment_button_id', 'pl_NCWL6QWI6qa5ZC');

      script.onload = () => {
        const options = {
          key: 'rzp_test_eDN67fgbUELQb9', // Replace with your actual Razorpay Key ID
          amount: 50000, // Example amount (in paise or the smallest currency unit)
          currency: 'INR',
          name: 'Your Company Name',
          description: 'Payment for your product or service',
          image: 'https://your-company-logo.png', // Add your company logo URL
           // Replace with a valid order ID from your server
          handler: function (response) {
            alert('Payment successful!');
            console.log(response);
          },
          prefill: {
            name: 'John Doe',
            email: 'john@example.com',
            contact: '9876543210',
          },
          notes: {
            address: 'Customer Address',
          },
          theme: {
            color: '#3399cc',
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response) {
          alert('Payment failed!');
          console.log(response.error.code);
          console.log(response.error.description);
          // Handle payment failure
        });

        // Append the Razorpay button to the container
        rzp.mount(`#${razorpayContainerRef.current.id}`);
      };

      script.onerror = () => {
        alert("Failed to load Razorpay script. Please try again later.");
      };

      // Check if the form with the specified ID exists
      const formElement = document.getElementById('razorpay-form');
      if (formElement) {
        formElement.appendChild(script);
      } else {
        console.error("Form with ID 'razorpay-form' not found.");
      }
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
