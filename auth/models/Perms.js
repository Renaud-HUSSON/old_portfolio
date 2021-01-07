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
   * Reads a single perms base on its id
   * 
   * @param {*} callback 
   * 
   */
  read_single(callback){
    const sql = `SELECT * FROM ${this.#table}, endpoints 
                 WHERE endpoints.id = ${this.#table}.endpoints 
                 AND "${this.#endpoints}" LIKE concat(endpoints.chemin, '%') 
                 AND methods = "${this.#methods}"`

    this.#conn.query(sql, callback)
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