const express =  require('express');
const cors = require('cors');
const app = express();
const estudianteRoute = require('./src/routers/estudiantesRouter')


app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.use(express.json());
app.use(cors());

app.use('/estudiante', estudianteRoute);

app.listen(4000, (req, res) => console.log('running port 4000'));
