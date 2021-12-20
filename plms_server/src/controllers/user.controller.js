
const sequelize = require('sequelize')
const conn = require('../config/db.config')

// get all userlist
exports.getUserInfo = async (req, res) => {
  // let {ClientCode}=req.query;
  let ClientCode = 'plms_UAT'

  
  let sql =[
    `select Count (1) as UserCount  from [${ClientCode}].[dbo].[Users]`,
    `select userStatus,Count (1) as UserCount from [${ClientCode}].[dbo].[Users] Group by userStatus`,
    `select Count(1) as UserCount from [${ClientCode}].[dbo].[Users] Where createdAt > DATEADD(day,-7, GETDATE())`
].join(' ');
  
  conn.query(sql, { type: sequelize.QueryTypes.SELECT})
    .then(function(users) {
      res.json({status:200,message:"Request has succeeded",data:users});
    }).catch(err=>{
      res.json({status:500,message:'Request failed',err:err})
    })
}



exports.loginUser = async (req, res) =>{
    // console.log(req.query);
    let {email, password} = req.query;
    if (email=="admin@panamoure.com"&&password=="test123$") {
      res.json({status:200,message:"login succeeded"})
    }else{
      res.json({status:400,message:"Invalid user"})
    }
}



