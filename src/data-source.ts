import 'dotenv/config';
import 'reflect-metadata';

import { DataSource } from 'typeorm';

//garantindo o valor da porta como número conforme exigência do DB
const PORT = process.env.DB_PORT as number | undefined

// configuração das variaveis do DB
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [`${__dirname}/**/entities/*.{ts,js}`], //caminho coringa para pegar todas as entidades pré e pós build
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`] //caminho coringa para pegar todas as migrations pré e pós build
})