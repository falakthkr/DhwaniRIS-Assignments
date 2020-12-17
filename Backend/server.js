const express = require("express")
const mongoose = require("mongoose")

const User = require("./models/User")
const Child = require("./models/Child")
const District = require("./models/District")
const State = require("./models/State")

const app = express()

app.use(express.json())

mongoose.connect(
    "mongodb://localhost/dhwani",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (req, res) => {
      console.log("The database is connected");
    }
);

app.listen(5000, () => {
    console.log("The server is up and running");
});