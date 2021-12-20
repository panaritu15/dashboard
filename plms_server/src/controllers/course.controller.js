const sequelize = require('sequelize')
const conn = require('../config/db.config')

// get all userlist
exports.getCourseInfo = async (req, res) => {
  
  // let {ClientCode}=req.query;
  let ClientCode = 'plms_UAT'

  let sql =[
    `select case when courseType is null  then 'SCORM' else 'INHOUSE' end as CourseType, Count(1) AS CourseCount from [${ClientCode}].[dbo].[Courses] Group by CourseType`
].join(' ');
  
  conn.query(sql, { type: sequelize.QueryTypes.SELECT})
    .then(function(course) {
      res.json({status:200,message:"Request has succeeded",data:course});
    }).catch(err=>{
      res.json({status:500,message:'Request failed',err:err})
    })
    
}



