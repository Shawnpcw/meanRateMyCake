
const api = require("./controller.js")

const bp = require("body-parser");

module.exports = function(app){

    
    app.use(bp.json());
    app.get('/cakes', api.allCakes);
    app.post('/cakes', api.makeCake);
    app.get("/cakes/:id", api.getCake);
    app.post('/cakes/:id', api.makeComment);
    return app;

}
