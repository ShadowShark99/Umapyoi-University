const db = require("../db/queries");

exports.getHome = async (req, res) => {
  const rows = await db.getAllUmas();
  res.render("index", {title: "Umapyoi University" ,umamusume: rows});
}

