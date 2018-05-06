const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const app = express();

const postaus = new Post({
  track: "Tali",
  date: new Date(),
  players: ["Miika", "Oski"]
})

app.get('/', (req, res) => res.send(postaus));

app.listen(3000, () => console.log('Listening to port 3000'));
