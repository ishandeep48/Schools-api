const cors = require('cors')
const express = require('express')

function middleware(app){
    app.use(express.json());
    app.use(cors());

}

module.exports = middleware