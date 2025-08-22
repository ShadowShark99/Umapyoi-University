const db = require("../db/queries")

exports.formGet = (req,res) => {
  res.render("enroll");
}

exports.umaPost = async (req,res) => {
  const {trainer, uma} = req.body;
  const newUma = {
    trainer,
    uma_id: uma,
  };
  await db.enrollUma(newUma);
  res.redirect("/");
};