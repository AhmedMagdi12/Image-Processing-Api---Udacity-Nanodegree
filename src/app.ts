import express from 'express';
// import {promises as fsPromises} from 'fs';
import routes from '../routes/index';

const app = express();
const port = 3000;
    

app.use('/api', routes);

// app.set('view engine', 'ejs');
// app.set('views', 'views');


app.get('/', (req, res) => {
    res.send('connected');
}); 


app.listen(port, () => {
  console.log('Server is listening on port ' + port);
});
