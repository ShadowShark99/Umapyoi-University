const pool = require("./pool");

async function getAllUmas(){
  const {rows} = await pool.query("SELECT * FROM umamusume");
  return rows;
}

async function enrollUma(uma){
  await pool.query("INSERT INTO umamusume (trainer, uma_id) VALUES ($1, $2)", [uma.trainer, uma.uma_id]);
}


module.exports={
  getAllUmas,
  enrollUma,
};