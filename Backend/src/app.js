const express = require('express');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { clerkMiddleware } = require('@clerk/express');
const { serve } = require("inngest/express");
const { inngest, functions } = require("./inngest/index");
const router = require("./Router/showRouter");


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(clerkMiddleware())

app.get("/", (req, res) => {
  res.json({
    message: "Movie Booking Backend is running"
  });
});

app.use("/api/show", router);

app.use("/api/inngest", serve({ client: inngest, functions }));



module.exports = app