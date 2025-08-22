const pool = require("./pool");

async function getAllUmas(){
  const {rows} = await pool.query("SELECT * FROM umamusume");
  return rows;
}


module.exports={
  getAllUmas,
};