import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

app.use('/api', routes);

app.get('/', (req:express.Request, res:express.Response) : void=> {
  res.send('connected');
});

app.listen(port, () : void=> {
  console.log('Server is listening on port ' + port);
});

export default app;