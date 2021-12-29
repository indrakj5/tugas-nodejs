const express = require('express');
const res = require('express/lib/response');
const router = express.Router()

router.get('/list', function(req, res){
    let sql = `SELECT * FROM user`;
    db.query(sql, function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "User lists retrieved successfully"
        })
    })
})

router.post('/new', function(req, res){
    let sql = `INSERT INTO user(id_user, username, email, password) VALUES (?)`;
    let values = [
        req.body.id_user,
        req.body.username,
        req.body.email,
        req.body.password
    ];
    db.query(sql, [values], function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            message: "New user added successfully"
        })
    })
})

router.put('/update', function(req, res){
    let sql = `UPDATE user SET username = ('${req.body.username}'), email = ('${req.body.email}'), password = ('${req.body.password}') WHERE id_user = ('${req.body.id_user}')`;
    // let values = [
    //     req.body.username,
    //     req.body.email,
    //     req.body.password,
    //     req.body.id_user
    // ];
    db.query(sql, function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            message: "User updated successfully"
        })
    })
})

router.delete('/delete', function(req, res){
    let sql = `DELETE FROM user WHERE id_user = ('${req.body.id_user}')`;
    // let where = [
    // req.body.username,
    // req.body.email,
    // req.body.password,
    // req.body.id_user
    // ];
    db.query(sql, function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            message: "User deleted successfully"
        })
    })
})

module.exports = router