const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const person = { name: 'Gaga', age: 100, cool: true };
  res.json(req.query);
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(req.params.name);
});

module.exports = router;
