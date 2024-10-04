var express = require('express');
var router = express.Router();
var TutorialService = require("../services/tutorialservice")
var db = require("../models");
var tutorialService = new TutorialService(db);
const { Op } = require("sequelize");

/* GET tutorials listing. */
//Filtering example with sequelizer operators (Op)
//Test querystring:
//?title=java
router.get('/', async function(req, res, next) {
  const { title, description, published } = req.query;
  const titleCondition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  const descCondition = description ? { description: { [Op.like]: `%${description}%` } } : null;
  const publishedCondition = published ? { published: { [Op.like]: `%${published}%` } } : null;
  const condition = {[Op.and]: [titleCondition, descCondition, publishedCondition]};
  const tutorials = await tutorialService.getAll(condition);
  res.render('tutorial', {tutorials: tutorials});
});

module.exports = router;