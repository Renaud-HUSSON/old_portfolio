module.exports = class Experience {
  //DB properties
  #table = 'experiences'
  #conn

  //experience properties
  #id
  #date
  #name

  /**
   * experience's constructor: Initialize the experience, fields are optional
   * @param {*} db - the database's connection 
   * @param {String[]} [data] - experience's datas
   */
  constructor(db, data={}){
    this.#conn = db
    data.id ? this.#id = data.id : ''
    data.date ? this.#date = data.date : ''
    data.name ? this.#name = data.name : ''
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
   * Reads all experiences from the database
   * 
   * @param {apiCallback} callback - callback called after getting experiences datas
   * 
   */
  read_all(callback){
    const sql = `SELECT * FROM ${this.#table}`

    this.#conn.query(sql, callback)
  }

  /**
   * Reads a single experience from the database
   * 
   * @param {apiCallback} callback -  callback called after getting experiences datas
   * 
   */
  read_single(callback){
    const sql = `SELECT * FROM ${this.#table} WHERE id=${this.#id}`

    this.#conn.query(sql, callback)
  }

  /**
   * Creates a experience
   * 
   * @param {apiCallback} callback - callback called after creating the experience
   * 
   */
  create(callback){
    const sql = `INSERT INTO ${this.#table} SET date = ?, name=?`
    const inserts = [
      this.#date,
      this.#name
    ]
    
    this.#conn.query(sql, inserts, callback)
  }

  /**
   * Updates a experience according to its id
   * 
   * @param {apiCallback} callback - callback called after updating the experience
   * 
   */
  update(callback){
    const sql = `UPDATE ${this.#table} SET date=?, name=? WHERE id=?`
    
    const inserts = [
      this.#date,
      this.#name,
      this.#id
    ]

    this.#conn.query(sql, inserts, callback)
  }

  /**
   * Delete a experience according to its id
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
    this.#id = id;
  }

  get date(){
    return this.#date
  }

  set date(date){
    this.#date = date
  }

  get name(){
    return this.#name
  }

  set name(name){
    this.#name = name
  }
}