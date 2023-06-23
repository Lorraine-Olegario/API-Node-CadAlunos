const bodyParser  = require("body-parser");
const students = require('./studentRoutes');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(students);
}