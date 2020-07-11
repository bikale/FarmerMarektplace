const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const dotenv = require("dotenv");

const auth = require("./routes/auth");
const customers = require("./routes/customers");
const farmers = require("./routes/farmers");

const app = express();

//load env vars
require("dotenv").config();

app.use(express.json());

//allow cors policy
app.use(cors());

// Cookie parser
app.use(cookieParser());

//Mount router
app.use("/api/v1/farmermarket/auth", auth);
app.use("/api/v1/farmermarket/farmers", farmers);
app.use("/api/v1/farmermarket/customers", customers);

//404 handler
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Resource not found" });
});

const PORT = process.env.PORT || 5000;
const MongoURI = process.env.MongoURI || "";
mongoose
  .connect(MongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((dbCon) => {
    console.log(`Database Connected ........`);
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  })
  .catch(console.error);
