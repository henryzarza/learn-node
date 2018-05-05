const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const person = { name: 'Lady Gaga', dog: 'Ruphus' };
  //res.json(req.query);
  res.render('hello', {person, title: 'Home'});
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(req.params.name);
});

module.exports = router;
