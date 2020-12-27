module.exports = class Perms {
  //DB properties
  #table = 'perms'
  #conn

  //Perms fields
  #id
  #endpoint
  #method
  #role

  /**
   * 
   * @param {*} db - Database connection
   * 
   */
  constructor(db, data={}) {
    this.#conn = db
    data.id ? this.#id = data.id : ''
    data.endpoint ? this.#endpoint = data.endpoint : ''
    data.method ? this.#method = data.method : ''
    data.role ? this.#role = data.role : ''
  }

  /**
   * Reads all perms in the database
   * 
   * @param {*} callback 
   * 
   */
  read_all(callback){
    const sql = `SELECT * FROM ${this.#table}, endpoints 
                 WHERE ${this.#table}.id = endpoints.id`
    
    this.#conn.query(sql, callback)
  }

  /**
   * Reads a single perms base on its id
   * 
   * @param {*} callback 
   * 
   */
  read_single(callback){
    const sql = `SELECT * FROM ${this.#table}, endpoints 
                 WHERE endpoints.id = ${this.#table}.endpoint 
                 AND "${this.#endpoint}" LIKE concat(endpoints.chemin, '%') 
                 AND method = "${this.#method}"`

    this.#conn.query(sql, callback)
  }

  /**
   * Creates a perm in the database
   * 
   * @param {*} callback 
   * 
   */
  create(callback){
    const sql = `INSERT INTO ${this.#table} SET endpoint = ?, method = ?, role = ?`

    const inserts = [
      this.#endpoint,
      this.#method,
      this.#role
    ]

    this.#conn.query(sql, inserts, callback)
  }

  /**
   * Updates a perm in the database
   * 
   * @param {*} callback 
   * 
   */
  update(callback){
    const sql = `UPDATE ${this.#table} SET endpoint = ?, method = ?, role = ? WHERE id = ?`

    const inserts = [
      this.#endpoint,
      this.#method,
      this.#role,
      this.#id
    ]

    this.#conn.query(sql, inserts, callback)
  }

  /**
   * Deletes a perm in the database
   * 
   * @param {*} callback 
   * 
   */
  delete(callback){
    const sql = `DELETE FROM ${this.#table} WHERE id = ?`

    const inserts = [
      this.#id
    ]

    this.#conn.query(sql, inserts, callback)
  }
  
  //GETTERS & SETTERS  
  get endpoint(){
    return this.#endpoint
  }

  set endpoint(endpoint){
    this.#endpoint = endpoint
  }

  get method(){
    return this.#method
  }

  set method(method){
    this.#method = method
  }

  get role(){
    return this.#role
  }

  set role(role){
    this.#role = role
  }
}