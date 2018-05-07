const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const keys = require('./config/keys');
const path = require('path');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(express.static(path.join(__dirname, '../frisb-front/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frisb-front/build', 'index.html'));
});



const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
