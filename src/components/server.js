// const express = require('express');
// const Razorpay = require('razorpay');

// const app = express();
// const port = 3001;

// const razorpay = new Razorpay({
//   key_id: 'YOUR_RAZORPAY_KEY_ID',
//   key_secret: 'YOUR_RAZORPAY_KEY_SECRET',
// });

// app.post('/create-order', async (req, res) => {
//   const options = {
//     amount: 1000, // Example amount in paise (1000 paise = Rs. 10)
//     currency: 'INR',
//     receipt: 'order_receipt_123',
//   };

//   try {
//     const order = await razorpay.orders.create(options);
//     res.json({ order_id: order.id });
//   } catch (error) {
//     console.error('Error creating order:', error);
//     res.status(500).json({ error: 'Unable to create order' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
