
// const express = require('express');
// const stripe = require('stripe')('sk_test_51OM6qxSFP1cbsZZk1mJzXKczO8Efj4wR6xmTdserl68nMOaNIas3ZBOondZf3pTQqrMyq0TjaCQ6LzPTd6qtMYa600d1CYWv9o');

// const app = express();
// app.use(express.json());

// app.post('/api/payment', async (req, res) => {
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       payment_method: req.body.payment_method_id,
//       amount: 1000, // amount in cents
//       currency: 'usd',
//       confirmation_method: 'manual',
//       confirm: true,
//     });

//     res.json({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
