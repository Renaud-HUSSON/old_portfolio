module.exports = class Projet {
  //DB related properties
  #table = 'projets'
  #conn

  //Project properties
  #id;
  #name;
  #src;
  #description;
  #tech;
  
  /**
   * Project's constructor: Initialize the new project, fields are optional
   * @param {*} db - the database connection 
   * @param {String[]} [data] - project's datas
   */
  constructor(db, data={}){
    this.#conn = db
    data.name ? this.#name = data.name : '' 
    data.src ? this.#src = data.src : ''
    data.description ? this.#description = data.description : ''
    data.tech ? this.#tech = data.tech : ''
    data.id ? this.#id = data.id : ''
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
   * Reads all projects from the database
   * 
   * @param {apiCallback} callback - callback called after getting projects datas
   * 
   */
  read_all(callback) {
    const sql = `SELECT * FROM ${this.#table}`

    this.#conn.query(sql, callback)
  }

  /**
   * Reads a single project from the database
   * 
   * @param {apiCallback} callback -  callback called after getting project datas
   * 
   */
  read_single(callback){
    const sql = `SELECT * FROM ${this.#table} WHERE id = ${this.#id}`

    this.#conn.query(sql, callback)
  }

  /**
   * Creates a project
   * 
   * @param {apiCallback} callback - callback called after creating the project
   * 
   */
  create(callback){
    const sql = `INSERT INTO ${this.#table} SET id = ?, name = ?, src = ?, description = ?, tech = ?`
    const inserts = [
      this.#id,
      this.#name,
      this.#src,
      this.#description,
      this.#tech
    ]
    
    this.#conn.query(sql, inserts, callback)
  }

  /**
   * Updates a project according to its id
   * 
   * @param {apiCallback} callback - callback called after updating the project
   * 
   */
  update(callback){
    const sql = `UPDATE ${this.#table} SET name=?, src=?, description=?, tech=? WHERE id=?`
    
    const inserts = [
      this.#name,
      this.#src,
      this.#description,
      this.#tech,
      this.#id
    ]

    this.#conn.query(sql, inserts, callback)
  }

  //GETTERS & SETTERS
  get id(){
    return this.id
  }

  set id(id){
    this.#id = id;
  }
  
  get src(){
    return this.src
  }
  
  set src(src){
    this.#src = src;
  }

  get name(){
    return this.name
  }

  set name(name){
    this.#name = name;
  }

  get description(){
    return this.description
  }

  set description(description){
    this.#description = description;
  }

  get tech(){
    return this.tech
  }

  set tech(tech){
    this.#tech = tech;
  }
}