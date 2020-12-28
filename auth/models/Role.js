module.exports = class Role {
  //DB properties
  #table = 'roles'
  #conn

  //Roles properties
  #nom

  /**
   * Role's constructor
   * 
   * @param {*} db - Database connection
   * @param {*} [data] - Role's data
   * 
   */
  constructor(db, data){
    this.#conn = db
    data.nom ? this.#nom = data.nom : ''
  }

  /**
   * Reads all Roles in the database
   * 
   * @param {*} callback 
   * 
   */
  read_all(callback){
    const sql = `SELECT * FROM ${this.#table}`

    this.#conn.query(sql, callback)
  }

  /**
   * Reads a single Role in the database
   * 
   * @param {*} callback 
   * 
   */
  read_single(callback){
    const sql = `SELECT * FROM ${this.#table} WHERE role = ${this.#role}`

    this.#conn.query(sql, callback)
  }

  /**
   * Creates an Role in the database
   * 
   * @param {*} callback 
   * 
   */
  create(callback){
    const sql = `INSERT INTO ${this.#table} set role = ?`

    const inserts = [
      this.#role
    ]

    this.#conn.query(sql, inserts, callback)
  }

  /**
   * Updates an Role in the database
   * 
   * @param {*} callback 
   * 
   */
  update(callback){
    const sql = `UPDATE ${this.#table} SET role = ?`

    const inserts = [
      this.#role
    ]

    this.#conn.query(sql, inserts, callback)
  }
  
  /**
   * Deletes an Role from the database
   * 
   * @param {*} callback 
   * 
   */
  delete(callback){
    const sql = `DELETE FROM ${this.#table} WHERE role = ?`

    const inserts = [
      this.#role
    ]

    this.#conn.query(sql, inserts, callback)
  }

  //GETTERS & SETTERS
  get role(){
    return this.#role
  }

  set role(role){
    this.#role = Role
  }
}