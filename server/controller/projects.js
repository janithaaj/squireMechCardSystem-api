

const pool = require('../db')

//list all projects
exports.projects = function (req, res, next) {
    pool.query("SELECT * FROM documentation_projects", (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};