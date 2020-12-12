const mysql = require('mysql')

class Database {
  //DB fields to connect
  #host = process.env.DB_HOST
  #username = process.env.DB_USERNAME
  #password = process.env.DB_PASSWORD
  #name = process.env.DB_NAME
  
  #conn

  constructor(){
    //Create the connection to the database
    this.#conn = mysql.createConnection({
      database: this.#name,
      user: this.#username,
      host: this.#host,
      password: this.#password,
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