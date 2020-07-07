const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const auth = require("./routes/auth");

const app = express();

//load env vars
dotenv.config({ path: "./config/config.env" });

app.use(express.json());

//Mount router
app.use("/api/farmermarket/v1/auth", auth);

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
