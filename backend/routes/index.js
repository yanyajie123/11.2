var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'666666',
    database:'item'
})
/* GET home page. */
router.post('/list', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    connection.query('SELECT * FROM class',function (err, rows, fileds) {
        res.send(rows)
    })
});
router.post('/add', function(req, res, next) {
    var x=req.body.name;
    var y=req.body.age;
    res.header('Access-Control-Allow-Origin','*');
    connection.query('INSERT INTO class (name,age) VALUES ("'+x+'","'+y+'")',function (err, rows, fileds) {
        res.send(rows)
    })
});

module.exports = router;
