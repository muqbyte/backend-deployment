import pg from "pg"
const {Pool} =pg
import { Sequelize } from "sequelize"
import 'dotenv/config'

 
// const pool = new Pool({
//   host: 'db.qibvvkqsgzxnbeykuirq.supabase.co',
//   user: 'postgres',
//   databse: 'postgres',
//   password:'w55rE4012tG9e0BE',
//   port: 5432,
// })

// //connection string
// const postgresConnection = new Sequelize('postgresql://postgres:w55rE4012tG9e0BE@db.qibvvkqsgzxnbeykuirq.supabase.co:5432/postgres')

console.log("FROM ENV",process.env.DB_HOST)

export const postgresConnection = new Sequelize({
    dialect:process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database:process.env.DB_DATABASE
})

export const dbInit = async () =>{
    try {
        await postgresConnection.authenticate()
        console.log("DATABASE CONNECTED") // brianc
        // await User.sync()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
