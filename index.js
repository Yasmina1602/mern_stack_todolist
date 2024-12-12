
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const app = express()

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('DataBase connect ...');
    })
    .catch((err) => {
        console.log('Fail while connect !!!', err);
    });

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/travel', require('./routes/travel_rout'))

PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`${PORT} portni eshtishni boshladi ...`)   )