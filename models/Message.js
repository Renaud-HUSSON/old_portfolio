module.exports = class Message {
  //DB related properties
  #table = 'messages'
  #conn

  //Message properties
  #id
  #email
  #message
  
  /**
   * Message's constructor: Initialize the new message, fields are optional
   * @param {*} db - the database connection 
   * @param {String[]} [data] - message's datas
   */
  constructor(db, data={}){
    this.#conn = db
    data.id ? this.#id = data.id : ''
    data.email ? this.#email = data.email : '' 
    data.message ? this.#message = data.message : ''
  }

  
  /**
   * Callback called after getting datas from a database
   * 
   * @callback apiCallback
   * @param {Error} [err] - Error returned if the query went wrong
   * @param {Object[]} [results] - Results retrieved from the database
   * @param {Object} [fields] - Informations about result's fields
   */
  
  /**
   * Reads all messages from the database
   * 
   * @param {apiCallback} callback - callback called after getting messages datas
   * 
   */
  read_all(callback){
    const sql = `SELECT * FROM ${this.#table}`

    this.#conn.query(sql, callback)
  }

  /**
   * Reads a single message from the database
   * 
   * @param {apiCallback} callback -  callback called after getting message datas
   * 
   */
  read_single(callback){
    const sql = `SELECT * FROM ${this.#table} WHERE id = ${this.#id}`

    this.#conn.query(sql, callback)
  }

  /**
   * Creates a message
   * 
   * @param {apiCallback} callback - callback called after creating the message
   * 
   */
  create(callback){
    const sql = `INSERT INTO ${this.#table} SET email=?, message=?`
    const inserts = [
      this.#email,
      this.#message
    ]

    this.#conn.query(sql, inserts, callback)
  }

  /**
   * Updates a message according to its id
   * 
   * @param {apiCallback} callback - callback called after updating the message
   * 
   */
  update(callback){
    const sql = `UPDATE ${this.#table} SET email=?, message=? WHERE id=?`
    const inserts = [
      this.#email,
      this.#message,
      this.#id
    ]

    this.#conn.query(sql, inserts, callback)
  }

  /**
   * Delete a message according to its id
   * 
   * @param {apiCallback} callback 
   * 
   */
  delete(callback){
    const sql = `DELETE FROM ${this.#table} WHERE id=?`
    const inserts = [
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

  get email(){
    return this.#email
  }

  set email(email){
    this.#email = email
  }

  get message(){
    return this.#message
  }

  set message(message){
    this.#message = message
  }
}