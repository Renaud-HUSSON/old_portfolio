module.exports = class Projet {
  //DB related properties
  #table = 'projets'
  #conn

  //Project properties
  #id
  #name
  #image
  #description
  #tech
  #link
  #github
  
  /**
   * Project's constructor: Initialize the new project, fields are optional
   * @param {*} db - the database connection 
   * @param {String[]} [data] - project's datas
   */
  constructor(db, data={}){
    this.#conn = db
    data.id ? this.#id = data.id : ''
    data.name ? this.#name = data.name : '' 
    data.image ? this.#image = data.image : ''
    data.description ? this.#description = data.description : ''
    data.tech ? this.#tech = data.tech : ''
    data.link ? this.#link = data.link : ''
    data.github ? this.#github = data.github : ''
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
    const sql = `SELECT * FROM ${this.#table} ORDER BY id DESC`

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
    const sql = `INSERT INTO ${this.#table} (name, image, description, tech, link, github) VALUES (?, ?, ?, ?, ?, ?)`
    const inserts = [
      this.#name,
      this.#image,
      this.#description,
      this.#tech,
      this.#link,
      this.#github
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
    const sql = `UPDATE ${this.#table} SET name=?, image=?, description=?, tech=?, set link=?, set github=? WHERE id=?`
    
    const inserts = [
      this.#name,
      this.#image,
      this.#description,
      this.#tech,
      this.#id,
      this.#link,
      this.#github
    ]

    this.#conn.query(sql, inserts, callback)
  }

  /**
   * Delete a project according to its id
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
    return this.id
  }

  set id(id){
    this.#id = id;
  }
  
  get image(){
    return this.image
  }
  
  set image(image){
    this.#image = image;
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

  get link(){
    return this.#link
  }

  set link(link){
    this.#link = link
  }

  get github(){
    return this.#github
  }

  set github(github){
    this.#github = github
  }
}