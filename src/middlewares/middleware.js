const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const flash = require('connect-flash');
const express = require('express');

const middleware = (app)=>{
    const corsOptions = {
        origin: 'http://localhost:3001', // Domain của frontend
        optionsSuccessStatus: 200 // Một số trình duyệt cũ sẽ gặp lỗi nếu trả về 204
    };
    app.use(logger('dev'));
    app.use(express.json({limit: '50mb'}));
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(cors(corsOptions));
    app.use(session({
        secret : 'Khoi',
        cookie : {maxAge : 60000},
        saveUninitialized : false,
        resave : false
    }));

    app.use(flash());
}

module.exports = middleware;