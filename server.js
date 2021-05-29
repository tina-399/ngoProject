require("dotenv").config();

const express = require("express");
const groupRoute = require("./routes/groupRouter");
const authRoute = require("./routes/userRouter");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());
require("./config/dbConnect");

app.use("/groups", groupRoute);
app.use("/auth", authRoute);

app.use(express.static("."));
app.use(express.urlencoded({ extended: false }));

app.post("/payment", async (req, res) => {
  const { cart, shipping_fee, total_amount } = req.body;

  const calculateOrderAmount = () => {
    return shipping_fee + total_amount;
  };

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: "usd",
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

app.listen(port, console.log("server is up and running"));
