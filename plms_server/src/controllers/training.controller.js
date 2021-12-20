const sequelize = require('sequelize')
const conn = require('../config/db.config')

// get all userlist
exports.getTrainingInfo = async (req, res) => {
  
  // let {ClientCode}=req.query;
  let ClientCode = 'plms_UAT'

  let sql =[
    `select Count(1) as TrainingCount From [${ClientCode}].[dbo].[Trainings]`
].join(' ');
  
  conn.query(sql, { type: sequelize.QueryTypes.SELECT})
    .then(function(training) {
      res.json({status:200,message:"Request has succeeded",data:training});
    }).catch(err=>{
      res.json({status:500,message:'Request failed',err:err})
    })
    
}



