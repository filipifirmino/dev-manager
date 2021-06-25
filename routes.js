const express = require('express');

const routes = express();

const {getAllTechnologies, getAllDevelopers, createDeveloper} = require('./src/controllers')

routes.get('/', getAllTechnologies);

routes.get('/developer', getAllDevelopers);

routes.post('/developer', createDeveloper)

routes.put('/developer/:id', (_req, res) => {
    res.json('Update Developer');
})

routes.delete('/developer/:id', (_req, res) => {
    res.json('Delete developer');
})


module.exports = routes