module.exports = class User {
  //DB Properties
  #table = 'users'
  #conn
  
  //Users properties
  #username
  #password

  /**
   * User's constructor: Initialize the new user, fields are optional
   * @param {*} db - the database connection 
   * @param {String[]} [data] - user's datas
   */
  constructor(db, data){
    this.#conn = db
    data.username ? this.#username = data.username: ''
    data.password ? this.#password = data.password: ''
  }

  /**
   * 
   * @param {*} callback 
   */
  read_single(callback) {
    const sql = `SELECT * FROM ${this.#table} WHERE username="${this.#username}"`

    this.#conn.query(sql, callback)
  }

  //GETTERS & SETTERS
  get username(){
    return this.#username
  }

  set username(username){
    this.#username = username
  }

  get password(){
    return this.#password
  }

  set password(password){
    this.#password = password
  }
}