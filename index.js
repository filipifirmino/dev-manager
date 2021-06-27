const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const routes = require('./routes');

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(cors());
app.use(express.json());
app.use('/', routes)
app.listen(port, () => console.log(`Server listen port ${port}`));