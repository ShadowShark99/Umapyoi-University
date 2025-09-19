const db = require("../db/queries");
const umaAPI = require("./umaAPI");

//gets called by view GET
exports.expand = async (req, res) => {
  //console.log("expand");
  const {umaInfo, trainer, victories, stats} = req.body;
  const uma_id = umaInfo;
  const uma = await umaAPI.fetchUma(uma_id);
  const umaExpand = {name: uma.name_en, 
                      src: uma.sns_icon, 
                      profile: uma.profile,
                      audio: uma.voice,
                      id: uma_id,
                    };
  res.render("umaExpand", {uma: umaExpand, trainer, victories, stats});
};

exports.train = async(req, res) => {
  const {trainer, uma_id} = req.body;
  await db.trainUma(trainer, uma_id);
  res.redirect("/");
};

const randomTrainer = (trainers) => {
  const length = trainers.length;
  const ri = Math.floor((Math.random() * length));
  return trainers[ri];
};

exports.battle = async(req, res) => {
  const{stats, victories, trainer, uma_id} = req.body;
  const rivals = await db.rivalTrainers(trainer);
  const rival = randomTrainer(rivals);
  console.log(rival);
  if(victories + stats >= rival.uma_stats + rival.victories)
  {
    console.log("wwon");
    await db.win(trainer, uma_id);
  }
  res.redirect("/");

}