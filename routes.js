const express = require('express');

const routes = express();

routes.get('/', (_req, res) => {
    res.json('Welcome to Dev Manager!');
});

routes.get('/developer', (_req, res) => {
    res.json('Get All Developers');
})
routes.post('/developer', (_req, res) => {
    res.json('Create Developer');
})

routes.put('/developer/:id', (_req, res) => {
    res.json('Update Developer');
})

routes.delete('/developer/:id', (_req, res) => {
    res.json('Delete developer');
})


module.exports = routes