const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const port = 6500;

// express app initialization
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

// initialization
const http = require("http").createServer(app);

// mongo init

const uri = process.env.MONGOURI;

const connect = () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};
mongoose.set("strictQuery", false);

app.use("/", (req, res) => res.send("Hello World!"));

// port listening

http.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});
