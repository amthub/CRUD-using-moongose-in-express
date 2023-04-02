import express from 'express'
import connectDB from './db/db.js';
import web from './routes/web.js'
const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';

connectDB(DATABASE_URL);

app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use('/',web);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

