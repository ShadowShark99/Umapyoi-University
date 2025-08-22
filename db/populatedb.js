require('dotenv').config();
const {Client} = require("db");

const SQL=`
  CREATE TABLE IF NOT EXISTS umamusume(
    trainer VARCHAR (255),
    uma_id INTEGER,
    uma_stats INTEGER DEFAULT 0,
    victories INTEGER DEFAULT 0
  );

  INSERT INTO umamusume (trainer, id)
  VALUES
    ('Shadowshark99, 1)
`;

async function main (){
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("finish");
}

main();