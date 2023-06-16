const express  = require("express");
const routes = require("./routes");

const app = express();
const port = 3003;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

routes(app);

app.listen(port, () => console.log("Servidor rodando"));
module.exports = app;