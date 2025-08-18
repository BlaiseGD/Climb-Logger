import {NextResponse} from 'next/server';
import mysql2 from "mysql2/promise";

async function getUserDB(){
    return mysql2.createConnection({
        host: process.env.USER_DB_HOST,
        user: process.env.USER_DB_USER,
        password: process.env.USER_DB_PASS,
        database: process.env.USER_NAME
    });
}

