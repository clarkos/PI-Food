const router = require("express").Router();
const { Diet } = require("../../db");
// const Sequelize = require("sequelize");
// const Op = Sequelize.Op;

router.get("/", async function (req, res) {
  let dbResult = await Diet.findAll({ attributes: ["ID", "name"] });
  res.json(dbResult);
});

module.exports = router;