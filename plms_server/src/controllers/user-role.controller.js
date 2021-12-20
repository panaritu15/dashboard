const sequelize = require('sequelize')
const conn = require('../config/db.config')

// get all userlist
exports.getUserRoleInfo = async (req, res) => {
  
  // let {ClientCode}=req.query;
  let ClientCode = 'plms_UAT'

  let sql =[
    `select r.roleName, Count(1) as roleCount From [${ClientCode}].[dbo].[User_Role_Assignments] rs inner join [${ClientCode}].[dbo].[Roles] r on r.roleID =rs.RoleRoleID inner join [${ClientCode}].[dbo].[Users] U on u.userID=rs.UserUserID Group by r.roleName`].join(' ');
  
  conn.query(sql, { type: sequelize.QueryTypes.SELECT})
    .then(function(userRoles) {
      res.json({status:200,message:"Request has succeeded",data:userRoles});
    }).catch(err=>{
      res.json({status:500,message:'Request failed',err:err})
    })
}



