const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const corsOption = {
    origin:"*",
    Credential:true,
    optionsSuccessStatus:200
}   

//create expp app
const app = express()


//setoup the serve port
const port = process.env.PORT||3000
app.use(cors(corsOption))

app.use(bodyParser.urlencoded({extended:false}))
//parse req data type JSON
app.use(bodyParser.json())


//defin root route
app.get('/',(req, res)=>{
    res.send('hello world')
})

// // import routes
const userRoutes = require('./src/routes/user.route');
const clientRoutes = require('./src/routes/client.route');
const courseRoutes = require('./src/routes/course.route');
const trainingRoutes = require('./src/routes/training.route');
const eventRoutes = require('./src/routes/event.route');
const userRoleRoutes = require('./src/routes/user-role.route');


app.use('/api/user', userRoutes);
app.use('/api/client', clientRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/training', trainingRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/userRole', userRoleRoutes);


app.listen(port,()=>{
    console.log('running on http://localhost:3000');
})