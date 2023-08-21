const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/routeTodo.cjs");
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

app.use(cors())
// app.use(cors(){
//   origin: ["https://to-do-app-api-beta.vercel.app/"],
//   methods: ["POST", "GET", "PUT", "DELETE"],
//   credentials: true,
// })
app.get('/', (req, res) => console.log("Hello"))
app.use(bodyParser.json())


app.use(bodyParser.json());

app.use("/", router);

app.listen("5000");
