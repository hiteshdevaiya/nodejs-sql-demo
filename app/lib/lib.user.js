'use strict';

const bcrypt  = require('bcrypt');
var connection  = require('./db');
let Helper = require('../helpers/common.helper');



module.exports = {
  list: async (withfilter="") => {

      var sql = "SELECT * FROM users ORDER BY id desc";
      if(withfilter != ""){
        sql = `SELECT * FROM users ${withfilter}`;
      }
     
      const [rows, fields] = await connection.promise().query(sql);
      return rows;
  },

  checkExists: async (email) => {
    return new Promise((resolve, reject) => {
      connection.query( `SELECT * FROM users WHERE email = '${email}'`, (err, results) => {
        // console.log(result.sql); return false;
          if(err) {
              reject(err);
          } else {
            if(results && results.length > 0){
              resolve(false);
            }else{
              resolve(true);
            }
          } 
      });
    });
  },

  checkExistsWithId: async (email,id) => {
    return new Promise((resolve, reject) => {
      connection.query( 'SELECT * FROM users WHERE email = ? AND id != ?', [email,id] ,(err, results) => {
          if(err) {
              reject(err);
          } else {
            if(results && results.length > 0){
              resolve(false);
            }else{
              resolve(true);
            }
          } 
      });
    });
  },

  createUser: async (allParam) => {

    var sql = "INSERT INTO users SET ?";
    let { email, password, role, name, contact } = allParam;
    password = bcrypt.hashSync(password, 10);

    var valuesinsert = { email, password, role, name, contact };
    const [rows, fields] = await connection.promise().query(sql,valuesinsert);
    return rows;

  },
  
  getUserById: async (id) => {
    return new Promise((resolve, reject) => {
      connection.query( `SELECT * FROM users WHERE id = '${id}'`, (err, results) => {
          if(err) {
            reject(err);
          } else {
            resolve(results);
          } 
      });
    });
  },

  getUserByEmail: async (email) => {
    return new Promise((resolve, reject) => {
      connection.query( `SELECT * FROM users WHERE email = '${email}'`, (err, results) => {
          if(err) {
            reject(err);
          } else {
            resolve(results);
          } 
      });
    });
  },

  updateUser: async (id,allParam) => {
    var sql = "UPDATE users SET ? WHERE id = ?";
    let { email, password, role, name, contact } = allParam;

    var valuesinsert = { email, name, contact };
    if(password && password.length && password != "" & password != undefined){
      password = bcrypt.hashSync(password, 10);
      valuesinsert['password'] = password ;
    }

    if(role && role.length && role != "" & role != undefined){
      valuesinsert['role'] = role ;
    }

    const [rows, fields] = await connection.promise().query(sql,[valuesinsert,id]);
    console.log({rows});
    return rows;
  },

  deleteUser: async (id) => {
    var sql = "DELETE FROM users WHERE id = ?";
    const [rows, fields] = await connection.promise().query(sql,id);
    return rows;
  },

  getUserToken: async (token) => {
    return new Promise((resolve, reject) => {
      connection.query( 'SELECT * FROM users WHERE token = ?',[token], (err, results) => {
          if(err) {
              reject(err);
          } else {
            if(results && results.length > 0){
              resolve(results);
            }else{
              resolve(false);
            }
          } 
      });
    });
  },

  updateToken: async (id,token) => {
    var sql = "UPDATE users SET token = ? WHERE id = ?";
    const [rows, fields] = await connection.promise().query(sql,[token,id]);
    return rows;
  },

  updateProfile: async (id,image) => {
    var sql = "UPDATE users SET image = ? WHERE id = ?";
    const [rows, fields] = await connection.promise().query(sql,[image,id]);
    return rows;
  },

}
