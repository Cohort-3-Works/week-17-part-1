import { Client } from "pg";

// const pgClient = new Client(
//   "postgresql://neondb_owner:KrkeR7dtZv3l@ep-plain-art-a53a3b4z.us-east-2.aws.neon.tech/neondb?sslmode=require"
// );

const pgClient = new Client({
  user: "neondb_owner",
  password: "KrkeR7dtZv3l",
  port: 5432,
  host: "ep-plain-art-a53a3b4z.us-east-2.aws.neon.tech",
  database: "neondb",
  ssl: true,
});

async function main() {
  await pgClient.connect();
  const response = await pgClient.query("SELECT * FROM users;");
  console.log(response.rows);
}

// main();

// https://zest-knee-b08.notion.site/Hello-bhaiya-new-doubt-below-as-you-told-to-share-all-the-steps-i-did-yesterday-14817f1447c180ac94e9c4654f9fbbba
