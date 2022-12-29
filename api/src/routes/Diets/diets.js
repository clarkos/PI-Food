const router = require('express').Router();
const Sequelize = require('sequelize');
const { Diet } = require('../../db');
const Op = Sequelize.Op;


router.get('/', async function(req,res) {
    let dbResult = await Diet.findAll({attributes: ['ID', 'name']})
    res.json(dbResult)
});



module.exports = router