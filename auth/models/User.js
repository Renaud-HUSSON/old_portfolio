module.exports = class User {
  //DB Properties
  #table = 'users'
  #conn
  
  //Users properties
  #id
  #username
  #password
  #role
  #token

  /**
   * User's constructor: Initialize the new user, fields are optional
   * @param {*} db - the database connection 
   * @param {String[]} [data] - user's datas
   */
  constructor(db, data){
    this.#conn = db
    data.id ? this.#id = data.id : ''
    data.username ? this.#username = data.username : ''
    data.password ? this.#password = data.password : ''
    data.role ? this.#role = data.role : ''
    data.token ? this.#token = data.token : ''
  }

  /**
   * Reads a single user based on its id or refresh token
   * 
   * @param {*} callback 
   * @param {String} [field] optional field to filter on
   * 
   */
  read_single(callback, field='username') {
    const sql = `SELECT * FROM ${this.#table} WHERE ${field === 'username' ? `username = "${this.#username}"` : field === 'token' ? `token = "${this.#token}"` : '' }`

    this.#conn.query(sql, callback)
  }

  /**
   * Updates a user
   * 
   * @param {*} callback 
   * 
   */
  update(callback){
    const sql = `UPDATE ${this.#table} SET username = ?, password = ?, role = ?, token = ? WHERE id = ?`

    const inserts = [
      this.#username,
      this.#password,
      this.#role,
      this.#token,
      this.#id
    ]

    this.#conn.query(sql, inserts, callback)
  }

  //GETTERS & SETTERS
  get id(){
    return this.#id
  }

  set id(id){
    this.#id = id
  }
  
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

  get role(){
    return this.#role
  }

  set role(role){
    this.#role = role
  }

  get token(){
    return this.#token
  }

  set token(token){
    this.#token = token
  }
}