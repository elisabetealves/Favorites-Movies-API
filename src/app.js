const express = require('express');
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// conectar o mongo com o mongoose 
const db = require('./data/database');
db.connect();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const index = require('./routes/index');
const title = require('./routes/tituloRoutes');
const studio = require('./routes/estudioRoutes');

app.use('/', index);
app.use('/title', title);
app.use('/studio', studio);

app.get('/terms', (res, req) => {
    return res.json({ message: 'Term of Service' });
});

module.exports = app;
