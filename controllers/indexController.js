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


//gets called by view GET
exports.expand = async (req, res) => {
  const {umaInfo} = req.body;
  const uma = await umaAPI.fetchUma(umaInfo);
  const umaExpand = {name: uma.name_en, 
                      src: uma.sns_icon, 
                      profile: uma.profile,
                      audio: uma.voice,
                    };
  res.render("umaExpand", {uma: umaExpand});
};

exports.delete = async (req, res) => {
  const {trainer} = req.body;
  await db.deleteUma(trainer);
  res.redirect("/");
}

exports.searchByTrainer = async(req, res) => {
  const {trainer} = req.body;
  const allTrainerUmas = await db.getExistingTrainer(trainer);
  await addUmaInfo(allTrainerUmas);
  res.render("trainerSearch", {umamusume: allTrainerUmas});
};