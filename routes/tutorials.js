var express = require('express');
var router = express.Router();
var TutorialService = require("../services/tutorialservice")
var db = require("../models");
var tutorialService = new TutorialService(db);

/* GET tutorials listing. */
router.get('/', async function(req, res, next) {
  const tutorials = await tutorialService.getAll();
  res.render('tutorial', {tutorials: tutorials});
});

module.exports = router;