const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'http://localhost:8081'];
const corsOptions = {
  origin: (origin, callback) => {
    const existe = whitelist.includes(origin);
    if (existe) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  }
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port' +  port);
});
