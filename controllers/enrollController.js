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

exports.umaPost = async (req,res) => {
  const {trainer, umaSelect} = req.body;
  const newUma = {
    trainer,
    uma_id: umaSelect,
  };
  await db.enrollUma(newUma);
  res.redirect("/");
};