const db = require("../db/queries");

exports.getHome = async (req, res) => {
  const rows = await db.getAllUmas();
  res.render("index", {title: "Umapyoi University" ,umamusume: rows});
}

//example id: (1002, 4536), (1003, 4550), (1001m 4737)
const fetchUma = async (id) => {
      const get = `https://umapyoi.net/api/v1/character/${id}`;
      const response = await fetch(get);
      const result = await response.json();
      console.log("result recieved");
      console.log(result);
      return {name: result.name_en, 
              src: result.sns_icon, 
              profile: result.profile,
              audio: result.voice,
            };
  };

//gets called by view GET
exports.expand = async (req, res) => {
  console.log("expanding");
  const {umaInfo} = req.body;
  console.log(umaInfo);
  const uma = await fetchUma(umaInfo);
  res.render("umaExpand", {uma});
};

exports.delete = async (req, res) => {
  const {trainer} = req.body;
  await db.deleteUma(trainer);
  res.redirect("/");
}