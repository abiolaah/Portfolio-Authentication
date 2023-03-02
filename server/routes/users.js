/*Oluwapelumi Ajuwon-301254275, Feb 4th, 2023*/
let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
