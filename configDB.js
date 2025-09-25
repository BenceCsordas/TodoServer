import dotenv from "dotenv"
dotenv.config()


export const configDB_ = {
    host: "localhost",
    user: "root",
    password: "",
    database: "todos"
}

export const configDB = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
}