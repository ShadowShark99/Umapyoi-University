const db = require("../db/queries");
const umaAPI = require("./umaAPI");

exports.getHome = async (req, res) => {
  const rows = await db.getAllUmas();
  await addUmaInfo(rows);
  res.render("index", {title: "Umapyoi University" ,umamusume: rows});
}



const addUmaInfo = async (umamusume) => {
  for(let i = 0; i < umamusume.length; i++)
  {
    const umaInfo = await umaAPI.fetchUma(umamusume[i].uma_id);
    umamusume[i].name = umaInfo.name_en;
    
  }
};


exports.delete = async (req, res) => {
  const {trainer, uma_id} = req.body;
  await db.deleteUma(trainer, uma_id);
  res.redirect("/");
}

exports.searchByTrainer = async(req, res) => {
  const {trainer} = req.body;
  const allTrainerUmas = await db.getExistingTrainer(trainer);
  await addUmaInfo(allTrainerUmas);
  res.render("trainerSearch", {umamusume: allTrainerUmas});
};

