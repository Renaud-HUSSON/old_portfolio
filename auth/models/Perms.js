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

  //GETTERS & SETTERS  
  get id(){
    return this.#id
  }

  set id(id){
    this.#id = id
  }
  
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