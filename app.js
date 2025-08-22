const express = require("express");
const app = express();

app.get("/", (req,res) => {res.send("hello world")});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (e) => {
  if(e)
    throw e;
  console.log(`Get Readyyy... START! ${PORT}`);
});