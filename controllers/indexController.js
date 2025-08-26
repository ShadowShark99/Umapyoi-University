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
  const get = `https://umapyoi.net/api/v1/character/1002`;
  let umaName = "Special week";
  const fetchUmas = async () => {

      const response = await fetch(get);
      console.log("response recieved");
      console.log(response);
      const result = await response.json();
      console.log("result recieved");
      console.log(result);
      // setPokemonName(result.name);
      // setSpriteUrl(result.sprites.front_default);
  };

  fetchUmas();
  res.redirect("/");
};