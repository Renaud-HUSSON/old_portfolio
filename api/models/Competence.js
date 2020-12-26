module.exports = class Competence {
  //DB properties
  #table = 'competences'
  #conn

  //Skill properties
  #id
  #name
  #type
  #image

  /**
   * Skill's constructor: Initialize the skill, fields are optional
   * @param {*} db - the database's connection 
   * @param {String[]} [data] - skill's datas
   */
  constructor(db, data={}){
    this.#conn = db
    data.id ? this.#id = data.id : ''
    data.name ? this.#name = data.name : ''
    data.type ? this.#type = data.type : ''
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
   * Reads all skills from the database
   * 
   * @param {apiCallback} callback - callback called after getting skills datas
   * 
   */
  read_all(callback){
    const sql = `SELECT * FROM ${this.#table}`

    this.#conn.query(sql, callback)
  }

  /**
   * Reads a single skill from the database
   * 
   * @param {apiCallback} callback -  callback called after getting skills datas
   * 
   */
  read_single(callback){
    const sql = `SELECT * FROM ${this.#table} WHERE id=${this.#id}`

    this.#conn.query(sql, callback)
  }

  /**
   * Creates a skill
   * 
   * @param {apiCallback} callback - callback called after creating the skill
   * 
   */
  create(callback){
    const sql = `INSERT INTO ${this.#table} SET name = ?, type=?, image=?`
    const inserts = [
      this.#name,
      this.#type,
      this.#image
    ]
    
    this.#conn.query(sql, inserts, callback)
  }

  /**
   * Updates a skill according to its id
   * 
   * @param {apiCallback} callback - callback called after updating the skill
   * 
   */
  update(callback){
    const sql = `UPDATE ${this.#table} SET name=?, type=?, image=? WHERE id=?`
    
    const inserts = [
      this.#name,
      this.#type,
      this.#image,
      this.#id
    ]

    this.#conn.query(sql, inserts, callback)
  }

  /**
   * Delete a skill according to its id
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

  get type(){
    return this.#type
  }

  set type(type){
    this.#type = type
  }

  get image(){
    return this.#image
  }

  set image(image){
    this.#image = image
  }
}