const db = require("../db/queries");

exports.getHome = async (req, res) => {
  const rows = await db.getAllUmas();
  res.render("index", {title: "Umapyoi University" ,umamusume: rows});
}

//example id: (1002, 4536), (1003, 4550), (1001m 4737)
//gets called by view GET
exports.expand = async (req, res) => {
  console.log("expanding");
  const {umaInfo} = req.body;
  console.log(umaInfo);
  const get = `https://umapyoi.net/api/v1/character/1002`;
  const fetchUma = async () => {

      const response = await fetch(get);
      const result = await response.json();
      console.log("result recieved");
      console.log(result);
      // setPokemonName(result.name);
      // setSpriteUrl(result.sprites.front_default);
      return {name: result.name_en, 
              src: result.sns_icon, 
              profile: result.profile,
              audio: result.voice,
            };
  };

  const uma = await fetchUma();
  res.render("umaExpand", {uma});
};