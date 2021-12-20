const sequelize = require('sequelize')
const conn = require('../config/db.config')

// get all userlist
exports.getEventInfo = async (req, res) => {
  
  // let {ClientCode}=req.query;plms_UAT
  let ClientCode = 'plms_UAT'
  let sql =[
    `select Count(1) as EventCount From [${ClientCode}].[dbo].[Events]`,
    `select EventType, Count(1) as EventCount From [${ClientCode}].[dbo].[Events] Group by EventType`
].join(' ');
  
  conn.query(sql, { type: sequelize.QueryTypes.SELECT})
    .then(function(events) {
      res.json({status:200,message:"Request has succeeded",data:events});
    }).catch(err=>{
      res.json({status:500,message:'Request failed',err:err})
    })
    
}



