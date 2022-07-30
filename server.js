const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");


dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   })
   .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  app.use("/routes/auth", authRoute);
  app.use("/routes/users", userRoute);
  app.use("/routes/posts", postRoute)
  app.use("/routes/categories", categoryRoute)

app.use("/",(req, res) => {
console.log("hi this is my app")
})


console.log("hello");

app.listen("3001", () => {
console.log("Listening to port!!!");
});