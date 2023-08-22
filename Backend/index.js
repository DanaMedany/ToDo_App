const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/routeTodo.js");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();

const mongoUrl =
  "mongodb+srv://DanaMedany:Dana123@todolist.4zu0x7o.mongodb.net/TodoList";
const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Database is connected");
  } catch (error) {
    console.log("Error while connect to Database" + error);
    process.exit();
  }
};
connectDB();

app.use(cors());
app.use(bodyParser.json());
// app.use(
//   cors({
//     origin: "*",
//     methods: ["post", "Get", "Put", "Delete"],
//     credentials: true,
//   })
// );

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res) => console.log("Hello"));

app.use("/", router);

app.listen("5000");
