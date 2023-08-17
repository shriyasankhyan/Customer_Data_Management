import express from 'express';
import cors from 'cors';
import Routes from './routes/route.js'

// // Here .js is important
import Connection from './database/db.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use('/', Routes);


const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));