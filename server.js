'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', (req,res) => {
  res.status(200).send('Route B');
});

app.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

app.get('/d', (req,res) => {
  res.status(200).send('Route D');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// Write error handling middleware
.catch(err=>console.error(err));
// Write not found middleware and a catch-all route that uses it.
app.get('*',(req,res)=>res.status(404).send('not found'));