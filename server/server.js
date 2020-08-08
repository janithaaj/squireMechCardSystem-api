const express = require('express');
const apiRoutes = require('./routes');
const cors = require('cors')
const app = express();
app.use(express.json());

app.use(cors())
// Add headers
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/api', apiRoutes);
app.listen('8080', () => {
    console.log('server up and running')
})


module.exports = app;