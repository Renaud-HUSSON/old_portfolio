module.exports = class Method {
  //DB properties
  #table = 'methods'
  #conn

  //Methods properties
  #nom

  /**
   * Method's constructor
   * 
   * @param {*} db - Database connection
   * @param {*} [data] - Method's data
   * 
   */
  constructor(db, data){
    this.#conn = db
    data.nom ? this.#nom = data.nom : ''
  }

  /**
   * Reads all Methods in the database
   * 
   * @param {*} callback 
   * 
   */
  read_all(callback){
    const sql = `SELECT * FROM ${this.#table}`

    this.#conn.query(sql, callback)
  }

  /**
   * Reads a single Method in the database
   * 
   * @param {*} callback 
   * 
   */
  read_single(callback){
    const sql = `SELECT * FROM ${this.#table} WHERE method = ${this.#method}`

    this.#conn.query(sql, callback)
  }

  /**
   * Creates an Method in the database
   * 
   * @param {*} callback 
   * 
   */
  create(callback){
    const sql = `INSERT INTO ${this.#table} set method = ?`

    const inserts = [
      this.#method
    ]

    this.#conn.query(sql, inserts, callback)
  }

  /**
   * Updates an Method in the database
   * 
   * @param {*} callback 
   * 
   */
  update(callback){
    const sql = `UPDATE ${this.#table} SET method = ?`

    const inserts = [
      this.#method
    ]

    this.#conn.query(sql, inserts, callback)
  }
  
  /**
   * Deletes an Method from the database
   * 
   * @param {*} callback 
   * 
   */
  delete(callback){
    const sql = `DELETE FROM ${this.#table} WHERE method = ?`

    const inserts = [
      this.#method
    ]

    this.#conn.query(sql, inserts, callback)
  }

  //GETTERS & SETTERS
  get method(){
    return this.#method
  }

  set method(method){
    this.#method = method
  }
}