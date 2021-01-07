module.exports = class Endpoint {
  //DB properties
  #table = 'endpoints'
  #conn

  //Endpoints properties
  #id
  #chemin

  /**
   * Endpoint's constructor
   * 
   * @param {*} db - Database connection
   * @param {*} [data] - Endpoints data
   * 
   */
  constructor(db, data={}){
    this.#conn = db
    data.id ? this.#id = data.id : ''
    data.chemin ? this.#chemin = data.chemin : ''
  }

  /**
   * Reads all endpoints in the database
   * 
   * @param {*} callback 
   * 
   */
  read_all(callback){
    const sql = `SELECT * FROM ${this.#table}`

    this.#conn.query(sql, callback)
  }

  /**
   * Reads a single endpoint in the database, based on its id or path
   * 
   * @param {*} callback 
   * @param {*} [field] - Field for the condition
   * 
   */
  read_single(callback, field = 'id'){
    const sql = `SELECT * FROM ${this.#table} 
                 WHERE ${field === 'id' ? `id=${this.#id}` : `chemin=${this.#chemin}`}`

    this.#conn.query(sql, callback)
  }

  /**
   * Creates an endpoint in the database
   * 
   * @param {*} callback 
   * 
   */
  create(callback){
    const sql = `INSERT INTO ${this.#table} set chemin = ?`

    const inserts = [
      this.#chemin
    ]

    this.#conn.query(sql, inserts, callback)
  }

  /**
   * Updates an endpoint in the database
   * 
   * @param {*} callback 
   * 
   */
  update(callback){
    const sql = `UPDATE ${this.#table} SET chemin = ? WHERE id = ?`

    const inserts = [
      this.#chemin,
      this.#id
    ]

    this.#conn.query(sql, inserts, callback)
  }
  
  /**
   * Deletes an endpoint from the database
   * 
   * @param {*} callback 
   * 
   */
  delete(callback){
    console.log(this.#id)
    const sql = `DELETE FROM ${this.#table} WHERE id = ?`

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

  get chemin(){
    return this.#chemin
  }

  set chemin(chemin){
    this.#chemin = chemin
  }
}