const express = require("express");
const route = require("./route/route.js");
const app = express();
const mongoose = require("mongoose");
const multer = require('multer')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

mongoose
  .connect(
    "mongodb+srv://sonal-plutonium:5dJokPsnG43EGYHE@cluster0.koc4qx2.mongodb.net/Group27-DB",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
