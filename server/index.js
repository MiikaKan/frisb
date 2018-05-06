const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express();

app.get('/', (req, res) => res.send("Hello World!"));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
