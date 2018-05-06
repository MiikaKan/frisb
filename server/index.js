const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const app = express();

const postaus = new Post({
  track: "Tali",
  date: new Date(),
  players: ["Miika", "Oski"]
})

app.get('/', (req, res) => res.send("Hello World!"));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
