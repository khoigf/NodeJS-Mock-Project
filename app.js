const express = require('express')
const path = require('path');
const configViewEngine = require('./src/config/viewEngine');
const webRoutes = require('./src/routes/web')
const app = express() //app express
const port = 8080 // port
const hostname = 'localhost';
const connection = require('./src/config/database')

//config template engine
configViewEngine(app)

//khai bao route
app.use('/',webRoutes)

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})