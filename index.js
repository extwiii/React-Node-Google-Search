const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const UNIVERSITIES = require('./data/universities.json');

const app = express();

// Set port
const PORT = process.env.PORT || 9000;

let selectedUni = [];
// Set up body parser for post requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Set end points for albums
app.get('/api/universities', (req, res) => {
  res.json(UNIVERSITIES);
});

app.post('/api/save', (req, res) => {
  if (UNIVERSITIES[req.body.index].name === req.body.name) {
    const temp = UNIVERSITIES[req.body.index];
    temp.img = req.body.img;
    temp.id = req.body.index;
    selectedUni.push(temp);

    console.log(`id ----------- ${temp.id}`);
    console.log(`name ----------- ${req.body.img}`);
    console.log(`name ----------- ${req.body.name}`);
    console.log(`${req.body.name} - ${selectedUni.length}`);
  }
  if (selectedUni.length === 100) {
    selectedUni.sort((a, b) => a.id - b.id);
    fs.appendFileSync('./data/new.json', JSON.stringify(selectedUni));
    selectedUni = [];
  }

  res.send(req.body.img);
});

app.get('/api/universities/:id', (req, res) => {
  res.json(UNIVERSITIES[req.params.id]);
});

// Listen port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;
