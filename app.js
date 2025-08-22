const express = require("express");
const app = express();
const indexRouter = require("./routers/indexRouter");

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (e) => {
  if(e)
    throw e;
  console.log(`Get Readyyy... START! ${PORT}`);
});