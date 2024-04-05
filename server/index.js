const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const cors = require("cors");
var morgan = require("morgan");
const cookieParser = require("cookie-parser");

/** Middleware */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use("/", require("./router/routes"));
app.use(morgan("tiny"));
app.use(cookieParser());

app.disable("x-powered-by");
app.options("*", cors());

mongoose
  .connect(process.env.DATA_BASE)
  .then(() => {
    console.log("Data Base is Connected");
    app.listen(PORT, () => {
      console.log(`Server is Running On ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Data Base Connection Error ${err}`);
  });
