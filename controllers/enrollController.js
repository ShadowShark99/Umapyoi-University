const db = require("../db/queries")

exports.formGet = (req,res) => {
  res.render("enroll");
}

exports.umaPost = async (req,res) => {
  const {trainer, umaSelect} = req.body;
  const newUma = {
    trainer,
    uma_id: umaSelect,
  };
  await db.enrollUma(newUma);
  res.redirect("/");
};