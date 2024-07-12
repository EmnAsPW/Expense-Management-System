const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");

//config dot end file

dotenv.config();

//database call
connectDB();

// rest objects
const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes

app.get("/", (req, res) => {
  res.send("<h1> Hello from server</h1>");
});

//port
const PORT = 8080 || process.env.PORT;

//listen

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
