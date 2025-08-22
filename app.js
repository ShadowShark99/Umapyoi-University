const express = require("express");
const path = require("path");
const app = express();
const indexRouter = require("./routers/indexRouter");

//views
app.use(express.urlencoded({extended: true}));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//routing
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (e) => {
  if(e)
    throw e;
  console.log(`Get Readyyy... START! ${PORT}`);
});