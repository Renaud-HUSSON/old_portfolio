module.exports = class Experience {
  //DB properties
  #table = 'experiences'
  #conn

  //experience properties
  #id
  #name
  #image

  /**
   * experience's constructor: Initialize the experience, fields are optional
   * @param {*} db - the database's connection 
   * @param {String[]} [data] - experience's datas
   */
  constructor(db, data={}){
    this.#conn = db
    data.id ? this.#id = data.id : ''
    data.name ? this.#name = data.name : ''
    data.image ? this.#image = data.image : ''
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

    return this.#conn.query(sql, callback)
  }

  /**
   * Reads a single experience from the database
   * 
   * @param {apiCallback} callback -  callback called after getting experiences datas
   * 
   */
  read_single(callback){
    const sql = `SELECT * FROM ${this.#table} WHERE id=${this.#id}`

    return this.#conn.query(sql, callback)
  }

  /**
   * Creates a experience
   * 
   * @param {apiCallback} callback - callback called after creating the experience
   * 
   */
  create(callback){
    const sql = `INSERT INTO ${this.#table} SET name = ?, image=?`
    const inserts = [
      this.#name,
      this.#image
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
    const sql = `UPDATE ${this.#table} SET name=?, image=? WHERE id=?`
    
    const inserts = [
      this.#name,
      this.#image,
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

  get name(){
    return this.#name
  }

  set name(name){
    this.#name = name
  }

  get image(){
    return this.#image
  }

  set image(image){
    this.#image = image
  }
}