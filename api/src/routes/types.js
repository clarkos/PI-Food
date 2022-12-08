// const { Router } = require('express');
// const router = Router();
const { dietTypesDb } = require('../controllers/types')
const { Diet } = require('../db');


const dietTypeFn = async (req, res) => {
    try {
        dietTypesDb.forEach(e => {
            Diet.findOrCreate({
                where: { name: e}
            })
        });
        const dietTypes = await Diet.findAll();
        res.send(dietTypes)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = { dietTypeFn };