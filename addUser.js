const express = require('express');
const router = express.Router();

module.exports = ()=>{

    router.get('/adduser', (req, res) =>{
        res.render('index', {template:'adduser'});
    });

    return router;
}