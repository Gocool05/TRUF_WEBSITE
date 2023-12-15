import React, { useEffect } from 'react';

const Razor = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.async = true;
        script.setAttribute('data-payment_button_id', 'pl_NCWL6QWI6qa5ZC');
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      return <form />;
    };
    

export default Razor