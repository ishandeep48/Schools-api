const express = require('express')
const Routes = require('./contents/Routes/index')
const middleware = require('./contents/Middleware/middlware')
const db = require('./contents/Database/db')
const app = express()

// app.use(express.json())
middleware(app)

Routes(app);

app.listen(5000,()=>{
    console.log("running at port 5000")
})