const sequelize = require('sequelize')
const conn = require('../config/db.config')

// get all userlist
exports.getClientInfo = async (req, res) => {
  
  let sql =[
    'select count(1) as totalClient from [Master_DB_PLMS].[dbo].[client]',
    "select case when IsActive=1 then 'Active' else 'Inactive' end as [Status], count(1) as ClientCount from [Master_DB_PLMS].[dbo].[client] Group by IsActive",
    "select case when IsActive=1 then 'Active' else 'Inactive' end as [Status], count(1) as ClientCount from [Master_DB_PLMS].[dbo].[client] where [OTP_SentAt] > DATEADD(day,-7, GETDATE()) Group by IsActive"
].join(' ');
  
  conn.query(sql, { type: sequelize.QueryTypes.SELECT})
    .then(function(users) {
      res.json({data:users});
    }).catch(err=>{
      res.json({status:500,message:'Request failed',err:err})
    })
    
}


exports.getDetails = async (req, res) => {
  
  let sql =[
    `select c.ClientId,c.ClientName,c.ClientCode,c.CompanyName,c.ClientEmail,c.OTP_SentAt as createdAt,c.IsActive,cp.ActiveDate ,cp.selectedPlanID,cp.Amount as activePlanAmount, cpro.PrimaryContactPersonLocation, p.Title as planTitle
    from client c  
    left join ClientPlans cp  ON c.ClientId = cp.ClientId 
    left join ClientProfile as cpro on c.ClientId =cpro.ClientId 
    inner join Plans as p on cp.selectedPlanID = p.id;`
].join(' ');
  
  conn.query(sql, { type: sequelize.QueryTypes.SELECT})
    .then(function(clientsDetails) {
      res.json({status:200,message:"Request has succeeded",data:clientsDetails});
    }).catch(err=>{
      res.json({status:500,message:'Request failed',err:err})
    })
    
}
exports.getClientById = async (req, res) => {
  let clientId = req.params.id
  
  let sql =[
    `select c.ClientName,c.CompanyName,c.ClientEmail,c.OTP_SentAt as createdAt,c.IsActive,cp.ActiveDate ,cp.selectedPlanID,cp.Amount as activePlanAmount, cpro.PrimaryContactPersonLocation, p.Title as planTitle from client c  left join ClientPlans cp  ON c.ClientId = cp.ClientId left join ClientProfile as cpro on c.ClientId =cpro.ClientId inner join Plans as p on cp.selectedPlanID = p.id where c.ClientId = ${clientId}`
].join(' ');
  
  conn.query(sql, { type: sequelize.QueryTypes.SELECT})
    .then(function(clientsDetails) {
      res.json({status:200,message:"Request has succeeded",data:clientsDetails});
    }).catch(err=>{
      res.json({status:500,message:'Request failed',err:err})
    })
    
}



