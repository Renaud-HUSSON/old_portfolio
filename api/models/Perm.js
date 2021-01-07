module.exports = class Perms {
  //DB properties
  #table = 'perms'
  #conn

  //Perms fields
  #id
  #endpoints
  #methods
  #roles

  /**
   * 
   * @param {*} db - Database connection
   * 
   */
  constructor(db, data={}) {
    this.#conn = db
    data.id ? this.#id = data.id : ''
    data.endpoints ? this.#endpoints = data.endpoints : ''
    data.methods ? this.#methods = data.methods : ''
    data.roles ? this.#roles = data.roles : ''
  }

  /**
   * Reads all perms in the database
   * 
   * @param {*} callback 
   * 
   */
  read_all(callback){
    const sql = `SELECT ${this.#table}.*, endpoints.chemin as chemin FROM ${this.#table}, endpoints 
                 WHERE ${this.#table}.endpoints = endpoints.id`
    
    this.#conn.query(sql, callback)
  }

  /**
   * Reads a single perms base on its id
   * 
   * @param {*} callback 
   * 
   */
  read_single(callback){
    console.log(this.#id)
    
    const sql = `SELECT ${this.#table}.*, endpoints.chemin as chemin FROM ${this.#table}, endpoints 
                 WHERE endpoints.id = ${this.#table}.endpoints
                 AND ${this.#table}.id = ${this.#id}`

    this.#conn.query(sql, callback)
  }

  /**
   * Creates a perm in the database
   * 
   * @param {*} callback 
   * 
   */
  create(callback){
    const sql = `INSERT INTO ${this.#table} SET endpoints = ?, methods = ?, roles = ?`

    const inserts = [
      this.#endpoints,
      this.#methods,
      this.#roles
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
    const sql = `UPDATE ${this.#table} SET endpoints = ?, methods = ?, roles = ? WHERE id = ?`

    const inserts = [
      this.#endpoints,
      this.#methods,
      this.#roles,
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
  get id(){
    return this.#id
  }

  set id(id){
    this.#id = id
  }
  
  get endpoints(){
    return this.#endpoints
  }

  set endpoints(endpoints){
    this.#endpoints = endpoints
  }

  get methods(){
    return this.#methods
  }

  set methods(methods){
    this.#methods = methods
  }

  get roles(){
    return this.#roles
  }

  set roles(roles){
    this.#roles = roles
  }
}