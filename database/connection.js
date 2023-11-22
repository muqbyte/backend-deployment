import pg from "pg"
const {Pool} =pg
import { Sequelize } from "sequelize"

 
// const pool = new Pool({
//   host: 'db.qibvvkqsgzxnbeykuirq.supabase.co',
//   user: 'postgres',
//   databse: 'postgres',
//   password:'w55rE4012tG9e0BE',
//   port: 5432,
// })

// //connection string
// const postgresConnection = new Sequelize('postgresql://postgres:w55rE4012tG9e0BE@db.qibvvkqsgzxnbeykuirq.supabase.co:5432/postgres')

export const postgresConnection = new Sequelize({
    dialect:'postgres',
    host: 'db.qibvvkqsgzxnbeykuirq.supabase.co',
    username:'postgres',
    password:'w55rE4012tG9e0BE',
    port: 5432,
    database:'postgres'
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
