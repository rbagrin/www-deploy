
const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = process.env.PORT || 5000;

// place holder for the data
const users = [];

app.use(bodyParser.json());
console.log(path.join(__dirname, './client/build'))
app.use(express.static(path.join(__dirname, './client/build')));

app.get('/api/test', (req, res) => {
  console.log('api/users called!')
  res.json("API: I'm 25!");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.get('/.well-known/acme-challenge/jVX7eJet2fV3Jj4wWVNig1fXn5lNCSz7VUkLqhAM0as', (req,res) => {
  res.sendFile(path.join(__dirname, './client/.well-known/acme-challenge/jVX7eJet2fV3Jj4wWVNig1fXn5lNCSz7VUkLqhAM0as'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});