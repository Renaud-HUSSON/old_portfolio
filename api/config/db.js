const mysql = require('mysql')

class Database {
  //DB fields to connect
  #host = process.env.DB_HOST
  #username = process.env.DB_USERNAME
  #password = process.env.DB_PASSWORD
  #name = process.env.DB_NAME
  #port = process.env.DB_PORT
  
  #conn

  constructor(){
    //Create the connection to the database
    this.#conn = mysql.createConnection({
      database: this.#name || 'portfolio',
      user: this.#username || 'root',
      host: this.#host || 'db',
      password: this.#password || 'root',
      port: this.#port || '3306'
    })
  }

  connect = () => {
    //Connect to the DB
    this.#conn.connect(err => {
      if(err) {
        console.error(`error connecting to the database: ${err}`)
        return
      }
    })
    return this.#conn
  }
}

module.exports = Database