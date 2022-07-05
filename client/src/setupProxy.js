const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(proxy('/web/auth', { target: 'http://localhost:7000/' }));
};

