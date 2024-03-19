const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const cors = require("cors");
var morgan = require("morgan");

/** Middleware */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/", require("./router/routes"));
app.use(morgan("tiny"));

app.disable("x-powered-by");

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
