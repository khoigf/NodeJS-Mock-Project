const express = require('express');
const path = require('path');
const configViewEngine = require('./src/config/viewEngine');
const webRoutes = require('./src/routes/web');
const { connectToDatabase } = require('./src/config/database');
const middleware = require('./src/middlewares/middleware');

const app = express();
const port = 8080;
const hostname = 'localhost';

// Configure template engine
configViewEngine(app);
middleware(app);

// Connect to the database
connectToDatabase();

// Define routes
app.use('/api/auth', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
