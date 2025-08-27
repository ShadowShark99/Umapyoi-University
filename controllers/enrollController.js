const db = require("../db/queries")
const umddb = require("../db/umaDatabase");
const umaAPI = require("./umaAPI");



exports.formGet = async (req,res) => {
  const umamusume = await umaAPI.fetchUmaIds();
  //console.log(umamusume);
  //await makeDropDownInfo(umamusume);
  // console.log(umamusume);
  res.render("enroll", {umamusume: umddb.dropdown});
}

const makeDropDownInfo = async(ids) => {
  for(let i = 0; i < ids.length; i++)
  {
    let uma = ids[i];
    if(!uma.game_id)
    {
      uma.game_id = uma.web_id;
    }
    const umaInfo = await umaAPI.fetchUma(uma.game_id);
    uma.name = umaInfo.name_en;
    console.log(uma);

  }
  console.log("finished");
};

const checkExistingUma = (umas, id) => {
  for(let i = 0; i < umas.length; i++)
  {
    if(umas[i].uma_id == id)
      return true;
  }
  return false;
};

exports.umaPost = async (req,res) => {
  const {trainer, umaSelect} = req.body;
  const existingTrainer = await db.getExistingTrainer(trainer);

  const newUma = (existingTrainer.length > 0)? {
    trainer: existingTrainer[0].trainer,
    uma_id: umaSelect,
  } : {
    trainer,
    uma_id: umaSelect,
  };



  if(existingTrainer.length > 0 && checkExistingUma(existingTrainer,umaSelect)){
    res.render("error");
  }

  await db.enrollUma(newUma);
  res.redirect("/");
};