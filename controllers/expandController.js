const db = require("../db/queries");
const umaAPI = require("./umaAPI");

//gets called by view GET
exports.expand = async (req, res) => {
  const {umaInfo, trainer} = req.body;
  const uma = await umaAPI.fetchUma(umaInfo);
  const umaExpand = {name: uma.name_en, 
                      src: uma.sns_icon, 
                      profile: uma.profile,
                      audio: uma.voice,
                      id: umaInfo,
                    };
  res.render("umaExpand", {uma: umaExpand, trainer});
};

exports.train = async(req, res) => {
  const {trainer, uma_id} = req.body;
  await db.trainUma(trainer, uma_id);
  res.redirect("/");
};