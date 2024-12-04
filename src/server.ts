import express from "express";

import { Client } from "pg";

const app = express();

app.use(express.json());

const pgClient = new Client(
  "postgresql://neondb_owner:KrkeR7dtZv3l@ep-plain-art-a53a3b4z.us-east-2.aws.neon.tech/neondb?sslmode=require"
);

let isConnected = false;
//@ts-ignore
app.post("/signup", async (req, res) => {
  if (!isConnected) {
    await pgClient.connect();
    isConnected = true;
    console.log("connected to the server!!!");
  }

  try {
    const { username, password, email } = req.body;

    const insertQuery = `INSERT INTO users (username ,email , password) VALUES ('${email}', '${username}' ,
    '${password}')`;

    const response = await pgClient.query(insertQuery);

    return res.json({
      message: "You have signed in !!!",
      insertQuery,
    });
  } catch (error) {
    return res.status(500).json({
      message: "error caught",
      error,
    });
  }
});

app.listen(3000, () => {
  console.log("server started on Port !!!");
});
