const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const port = 3000;

// Replace 'your_webhook_secret' with your actual Razorpay webhook secret
const webhookSecret = 'your_webhook_secret';

app.use(bodyParser.json());

app.post('/razorpay-webhook', (req, res) => {
  const razorpaySignature = req.get('X-Razorpay-Signature');

  try {
    const verifier = crypto.createHmac('sha256', webhookSecret);
    verifier.update(JSON.stringify(req.body));
    const expectedSignature = verifier.digest('hex');

    if (razorpaySignature === expectedSignature) {
      // Signature verification passed
      const event = req.body.event;
      const paymentId = req.body.payload.payment.entity.id;

      // Handle the event as needed (e.g., update database, send email)
      console.log(`Received ${event} for payment ${paymentId}`);
    } else {
      // Signature verification failed
      console.error('Signature verification failed');
    }
  } catch (error) {
    console.error('Error processing webhook:', error.message);
  }

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
