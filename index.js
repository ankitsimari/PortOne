require("dotenv").config();
const express = require("express");
const cors = require("cors");

const secretKey = process.env.SECRET_KEY;
const stripe = require("stripe")(secretKey);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Creating a payment intent in Indian Rupees
app.post("/v1/create_intent", async (req, res) => {
  try {
    const intent = await stripe.paymentIntents.create({
      amount: 100000,
      currency: "inr",
    });

    res.json({ client_secret: intent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Capturing a payment intent
app.post("/v1/capture_intent/:id", async (req, res) => {
  const intentID = req.params.id;

  try {
    const intent = await stripe.paymentIntents.capture(intentID);
    res.json({ status: intent.status });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Creating a refund for a payment intent
app.post("/v1/create_refund/:id", async (req, res) => {
  const intentID = req.params.id;

  try {
    const refund = await stripe.refunds.create({ payment_intent: intentID });
    res.json({ status: refund.status });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// getting list of payment intents
app.get("/v1/get_intents", async (req, res) => {
  try {
    const intents = await stripe.paymentIntents.list();

    const intentList = intents.data.map((intent) => ({
      id: intent.id,
      status: intent.status,
    }));

    res.json({ intents: intentList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
