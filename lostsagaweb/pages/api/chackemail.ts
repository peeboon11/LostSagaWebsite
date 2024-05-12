import { get } from "http";
import type { NextApiRequest, NextApiResponse } from "next";
require('dotenv').config();

type Data = {
  name: string;
};

const sql = require('mssql');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT || "1433"),
  options: {
    encrypt: process.env.DB_OPTIONS_ENCRYPT === 'true'
  }
};

export default async function handler(req:any, res:any) {
  
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT * FROM LosaGame.dbo.userMemberDB`;
    console.log(result.recordset.map((user: any) => user.email));
    const resultdata = result.recordset.map((user: any) => user.email);
    res.status(200).json({ message: "API GET 100% completed successfully" });
    return resultdata;
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
