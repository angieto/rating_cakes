const api = require('./controller');
const bodyParser = require('body-parser');

// export a function that handle routes
module.exports = function(app) {
    app.use(bodyParser.json());
    app.get('/cakes', api.allCakes);
    app.get('/cakes/:id', api.getCake);
    app.post('/cakes', api.createCake);
    app.put('/cakes/update/:id', api.updateCake);
    app.delete('/cakes/delete/:id', api.deleteCake);
    app.post('/cakes/review/:id', api.addReview);
}