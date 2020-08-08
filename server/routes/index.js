const express = require('express');
const router = express.Router();
const pool = require('../db')
const user = require('../controller/user');
const tickets = require('../controller/tickets');
const projects = require('../controller/projects')


router.get('/users', user.userlist)
router.get('/userid', user.userid)
router.get('/tickets', tickets.ticketlist)
router.get('/ticket/id', tickets.ticket)
router.get('/ticket/category', tickets.ticketbyCat)
router.get('/ticket/category/list', tickets.ticketbyCatList)
router.get('/ticket/user', tickets.ticketbyuser)
router.get('/projects', projects.projects)
router.put('/ticket/update', tickets.ticketEdit)
router.post('/ticket/create', tickets.ticketCreate)


module.exports = router;