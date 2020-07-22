const path = require("path");
const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const auth = require("./routes/auth.route");
const customers = require("./routes/customers.route");
const farmers = require("./routes/farmers.route");
const superuser = require("./routes/super-user.route");

const app = express();
app.set("trust proxy", true);
require("@google-cloud/debug-agent").start({
  serviceContext: { enableCanary: true },
});

//load env vars
require("dotenv").config({ path: "./config/.env" });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//allow cors policy
app.use(cors());

// Cookie parser
app.use(cookieParser());

app.get("/", (req, res) => {
  console.log("in hi");
  return res.json({ status: "ok", data: [1, 2, 3, 4, 5] });
});

// //Set morgan logger middleware
// const accessLogStream = fs.createWriteStream(
//   path.join(__dirname, "./access.log"),
//   { flags: "a" }
// );
// app.use(
//   morgan(":method :url  :response-time :date[web]", {
//     stream: accessLogStream,
//   })
// );

//Mount router
app.use("/api/v1/farmermarket/auth", auth);
app.use("/api/v1/farmermarket/farmers", farmers);
app.use("/api/v1/farmermarket/customers", customers);
app.use("/api/v1/farmermarket/super", superuser);

//404 handler
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Resource not found" });
});

const PORT = process.env.PORT || 5000;
const MongoURI =
  process.env.MongoURI ||
  "mongodb+srv://fsgb:fsgb@cluster0-vzv7t.mongodb.net/farmermarket?retryWrites=true&w=majority";
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
