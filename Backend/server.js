const express = require("express")
const mongoose = require("mongoose")

const userRoute = require("./routes/users")
const districtRoute = require("./routes/districts")
const childRoute = require("./routes/children")
const stateRoute = require("./routes/states")

const app = express()

app.use(express.json())

app.use("/api/users", userRoute)
app.use("/api/districts",districtRoute)
app.use("/api/children",childRoute)
app.use("/api/states",stateRoute)

mongoose.connect(
    "mongodb://localhost/dhwani",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("The database is connected");
    }
);

app.listen(5000, () => {
    console.log("The server is up and running");
});