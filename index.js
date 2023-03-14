// This file is not to be modified. Please ignore this.
// We will understand all of this later in the course.
// DO NOT MODIFY THIS FILE

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/main.html'));
});
//your code here
// Create an array of five promises that resolve with a random time between 1 and 5 seconds
const promises = Array.from({ length: 5 }, () => new Promise(resolve => {
  const randomTime = Math.floor(Math.random() * 5) + 1;
  setTimeout(() => resolve(randomTime), randomTime * 1000);
}));

// Use Promise.any to wait for the first promise to resolve and then print its result to the div with id "output"
Promise.any(promises)
  .then(result => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = `The first promise resolved with result: ${result}`;
  })
  .catch(error => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = `All promises rejected with error: ${error}`;
  });

app.post('/add', (req, res) => {
  const {a,b} = req.body;
  res.status(200).send(a+b);
  // res.sendFile(path.join(__dirname + '/main.html'));
});
module.exports = app;