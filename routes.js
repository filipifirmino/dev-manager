const express = require('express');

const routes = express();

routes.get('/', (_req, res) => {
    res.json('Welcome to Dev Manager!');
});

module.exports = routes