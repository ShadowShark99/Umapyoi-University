const nativeRust = require('../rust-tasks');

//wrap in service 
const computeDataAsync = async (id) =>{
  try{
    const res = await nativeRust.umaFetch(parseInt(id));
    console.log(res);
    return res;
  } catch(error){
    throw new Error(`Rust computation failed: ${error.message}`);
  }
}

module.exports = {computeDataAsync};