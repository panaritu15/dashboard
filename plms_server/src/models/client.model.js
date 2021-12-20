const db = require('../config/db.config')
var Client = function(user){
    this.userID = user.userID,
    this.name = user.name,
    this.email = user.email,
    this.pwd = user.password,
    this.job_profile = user.job_profile,
    this.department = user.department,
    this.time = new Date()
}

// get all user 
User.getClientInfo = (result)=>{
    db.query('select userID, name, email, job_profile, department from users',(err, res)=>{
        if(err){
            console.log("error::",err);
            result(err, null)
        }else{
            console.log('result::all user fetched ',res);
            result(null, res)
        }
    })
}

// login user
User.LoginUser = (userData, result)=>{
    console.log('data::',userData);
    try{
        db.query(`select userID, name, email, job_profile, department from users where email='${userData.email}' and pwd='${userData.pwd}'`,(err, res)=>{
            if(err){
                console.log(err);
                result(err, null)
            }else{
                console.log(res);
                result(null, res)
            }
        })
    }
    catch(err){
        console.log('user not found');
    }

    
}

//create new user


 //find user
 User.find = (email) =>{
    return db.query('SELECT * FROM users WHERE email = ?', [email]);
  }

module.exports = User
