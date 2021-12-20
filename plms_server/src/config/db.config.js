"use strict";
const sequelize = require("sequelize")
// const log = require
 const conn = new sequelize (
    "Master_DB_PLMS",
    "PLMS_Test",
    "plms@321",
     {
         host:"164.52.210.11",
         port:"1433",
         dialect: 'mssql',
         dialectOptions: {
            multipleStatements: true
          }
     }
 );
 conn.authenticate().then((data)=>{
     console.log("200",data);
 }).catch(err=>{
     console.log("notokok",err);
 })

 module.exports = conn