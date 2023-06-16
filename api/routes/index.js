const bodyParser  = require("body-parser");
const alunos = require('./alunosRoutes');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(alunos);
}