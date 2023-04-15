// jZmB8twQzjN39tiy
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
// const mongoose = require("mongoose");
require("dotenv").config();
// mongoose.set("strictQuery", false);

// const { DB_HOST } = process.env;
// const DB_HOST =
//   "mongodb+srv://oleg:jZmB8twQzjN39tiy@cluster0.sjiqoyr.mongodb.net/db_contacts?retryWrites=true&w=majority";
// mongoose
//   .connect(DB_HOST)
//   .then(() => console.log("Database connect"))
//   .catch((error) => console.log(error.message));

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const contactsRouter = require("./routes/api/contacts");

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Server Error" } = error;
  res.status(status).json({ message });
});

module.exports = app;
