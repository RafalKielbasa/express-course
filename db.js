import pg from 'pg'

const pool = new pg.Pool({
  host: 'localhost',
  port: process.env.DB_PORT, // port bazy
  user: process.env.DB_USER, // użytkownik bazy
  password: process.env.DB_PASSWORD, // hasło
  database: process.env.DB_NAME, // nazwa bazy
})

export default pool
