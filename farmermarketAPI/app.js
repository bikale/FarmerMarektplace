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
// app.set("trust proxy", true);
// require("@google-cloud/debug-agent").start({
//   serviceContext: { enableCanary: true },
// });

//load env vars
require("dotenv").config({ path: "./config/.env" });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//allow cors policy
app.use(cors());

app.use("/public", express.static("public"));
app.use("/", express.static("public"));

// Cookie parser
app.use(cookieParser());

//Set morgan logger middleware
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "/public/access.log"),
  { flags: "a" }
);
app.use(
  morgan(":method :url  :response-time :date[web]", {
    stream: accessLogStream,
  })
);

//Mount router
app.use("/api/v1/farmermarket/auth", auth);
app.use("/api/v1/farmermarket/farmers", farmers);
app.use("/api/v1/farmermarket/customers", customers);
app.use("/api/v1/farmermarket/super", superuser);

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

//404 handler
app.use((req, res, next) => {
  res.redirect("/");
  // res.status(404).json({ success: false, message: "Resource not found" });
});

const PORT = process.env.PORT || 8080;
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
