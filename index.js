const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

const routes = require('./routes');


app.use(cors());
app.use(express.json());

app.get('/', routes)
app.listen(port, () => console.log(`Server listen port ${port}`));