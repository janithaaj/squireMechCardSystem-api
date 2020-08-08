
const pool = require('../db')

// all users list Export
exports.userlist = function (req, res, next) {
    pool.query('SELECT * FROM users', (err, rows, fields) => {
        if (!err)

            res.send(rows);
        else
            console.log(err);
    })
};

//user by id
exports.userid = function (req, res, next) {
    console.log(req.body.id, 'req.body.id ')
    pool.query("SELECT * FROM users WHERE users.ID = " + req.body.id + "", (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
}

exports.login = function (req, res, next) {
    console.log(req.body.id, 'req.body.id ')
    pool.query("SELECT * FROM users WHERE users.ID = " + req.body.id + "", (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
}
