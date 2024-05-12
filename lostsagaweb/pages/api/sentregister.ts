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

export default async function handler(req: any, res: any) {

    if (req.method === 'POST') {
        const { name } = req.body;
        const { username } = req.body;
        const { password } = req.body;
        const { email } = req.body;
        console.log(name, username, password, email);
        
    }
}
