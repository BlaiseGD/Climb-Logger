import {NextResponse} from 'next/server'
import mysql2 from "mysql2/promise";


async function getClimbsDB(){
    return mysql2.createConnection({
        host: process.env.CLIMBS_DB_HOST,
        user: process.env.CLIMBS_DB_USER,
        password: process.env.CLIMBS_DB_PASS,
        database: process.env.CLIMBS_NAME
    });
}