const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');


// API

// - App config

const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) =>
  response.status(200).send('Hello World!')
);

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log(
    'Payment Request received BOOM!!!, for this amount >>>> ',
    total
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunit of currency
    currency: 'inr',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example Endpoint
//http://localhost:5001/clone-75de4/us-central1/api
