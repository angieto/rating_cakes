const api = require('./controller');
const bodyParser = require('body-parser');

// export a function that handle routes
module.exports = function(app) {
    app.use(bodyParser.json());
    
    app.get('/api/cakes', api.allCakes);
    app.get('/api/cakes/:id', api.getCake);
    app.post('/api/cakes', api.createCake);
    app.post('/api/review/:id', api.reviewCake);
}