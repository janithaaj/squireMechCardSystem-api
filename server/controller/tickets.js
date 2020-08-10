const pool = require('../db')

// all ticket list Export
exports.ticketlist = function (req, res, next) {
    pool.query('SELECT * FROM tickets', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};


// all ticket by id Export
exports.ticket = function (req, res, next) {
    pool.query("SELECT * FROM tickets WHERE tickets.ID= " + req.body.id + "", (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

// all ticket by category Export
exports.ticketbyCat = function (req, res, next) {
    pool.query("SELECT * FROM tickets WHERE tickets.categoryid= " + req.body.categoryid + "", (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};


// all ticket category list Export
exports.ticketbyCatList = function (req, res, next) {
    pool.query("SELECT * FROM ticket_categories ", (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};


// all ticket by user Export
exports.ticketbyuser = function (req, res, next) {
    pool.query("SELECT * FROM tickets WHERE tickets.userid= " + req.body.userid + "", (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

// update ticket Export
exports.ticketEdit = function (req, res, next) {
    var input = JSON.parse(JSON.stringify(req.body));
    var id = input.ID;
    var data = {

        title: input.title,
        body: input.body,
        userid: input.userid,
        assignedid: input.assignedid,
        categoryid: input.categoryid,
        timestamp: input.timestamp,
        status: input.status,
        priority: input.priority,
        ticket_date: input.ticket_date,
        close_ticket_date: input.close_ticket_date
    };
    pool.query("UPDATE tickets set ? WHERE tickets.ID = ? ", [data, id], (err, rows, fields) => {
        if (!err)
            res.send(fields);
        else
            console.log(err);
    })
};

// Create ticket Export
exports.ticketCreate = function (req, res, next) {
    // console.log(req, 'req')
    var input = JSON.parse(JSON.stringify(req.body));
    // console.log(input, 'input')
    var data = {

        title: input.title,
        body: input.body,
        userid: input.userid,
        assignedid: input.assignedid,
        categoryid: input.categoryid,
        timestamp: input.timestamp,
        status: input.status,
        priority: input.priority,
        last_reply_timestamp: input.last_reply_timestamp,
        last_reply_userid: input.last_reply_userid,
        message_id_hash: input.message_id_hash,
        notes: input.notes,
        guest_email: input.guest_email,
        guest_password: input.guest_password,
        last_reply_string: input.last_reply_string,
        rating: input.rating,
        ticket_date: input.ticket_date,
        close_ticket_date: input.close_ticket_date,
        archived: input.archived,
        public: input.public,
        close_timestamp: input.close_timestamp,
    };
    // console.log(data, 'data')
    const sql = "INSERT INTO tickets (tickets.title, tickets.body, tickets.userid, tickets.assignedid, tickets.timestamp, tickets.categoryid, tickets.status, tickets.priority, tickets.last_reply_timestamp, tickets.last_reply_userid, tickets.notes, tickets.message_id_hash, tickets.guest_email, tickets.guest_password, tickets.last_reply_string, tickets.rating, tickets.ticket_date, tickets.close_ticket_date, tickets.archived, tickets.public, tickets.close_timestamp) VALUES ('" + data.title + "','" + data.body + "','" + data.userid + "','" + data.assignedid + "','" + data.timestamp + "','" + data.categoryid + "','" + data.status + "','" + data.priority + "','" + data.last_reply_timestamp + "','" + data.last_reply_userid + "','" + data.notes + "','" + data.message_id_hash + "','" + data.guest_email + "','" + data.guest_password + "','" + data.last_reply_string + "','" + data.rating + "','" + data.ticket_date + "','" + data.close_ticket_date + "','" + data.archived + "','" + data.public + "','" + data.close_timestamp + "')";
    pool.query(sql, (err, rows, fields) => {
        console.log(res.req.body, 'res')
        if (!err)
            console.log(res.req.body, 'res')
        if (res.status(200)) {
            res.send(res.req.body);
        }

        else
            console.log(err.code);
        res.send(err.code);
    })
};