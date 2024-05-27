const express = require("express");
const cors = require("cors");
const { connection } = require("./confige/db");
const multer=require('multer');
const { UserRouter } = require("./routes/Userroute");
const { TaskRouter } = require("./routes/Taskroute");
const {Authentication} =require("./middelware/Authentication")


require("dotenv").config();
const app = express();
app.use(
  cors({
    origin: "*",
  })
);


app.use(express.json());
app.use("/user",UserRouter)
app.use("/task",Authentication, TaskRouter)


app.get("/", (req, res) => {
  res.send("this is base api");
});

app.listen(process.env.PORT, async () => {
    try {
      await connection;
      console.log("connected to db successfully");
    } catch (err) {
      console.log(err);
    }
    console.log(`Listening on port ${process.env.PORT}`);
  });