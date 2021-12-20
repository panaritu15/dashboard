const db = require('../config/db.config')
var User = function(user){
    this.userID = user.userID,
    this.name = user.name,
    this.email = user.email,
    this.pwd = user.password,
    this.job_profile = user.job_profile,
    this.department = user.department,
    this.time = new Date()
}

// get all user 
User.getallusers = (result)=>{
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
//get user by id
User.getUserByID = (id,result)=>{
    db.query('select userID, name, email, job_profile, department from users where userID =?',id, (err, res)=>{
        if(err){
            console.log('not found or invalid req');
            result(err,null)
        }
        else{
            console.log('founded');
            result(null,res)
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

User.createNewUser =(userData, result)=>{
    db.query('insert into users set ?', userData, (err,res)=>{
        if(err){
            console.log('error while creatin new user');
            result(err, null)
        }
        else{

            console.log('User created : 200');
            result(null, res)
        }
    })
}

// update user by id
User.updateUser = (id, updateData, result)=>{
    console.log(updateData);
    db.query(`update users set pwd='${updateData.pwd}' where userid = ${id}`, (err, res)=>{
        if(err){
            console.log('not valid data or data not exists, updating');
            result(err, null)
        }else{
            console.log('data updated');
            result(null ,res)
        }
    })
}
 //find user
 User.find = (email) =>{
    return db.query('SELECT * FROM users WHERE email = ?', [email]);
  }

module.exports = User
