// const { Recipe, Diet } = require('../db');
const { Router } = require('express');
const allRecipes = require('../controllers/allRecipes')
const dbById = require('../controllers/dbById')
const apiById = require('../controllers/apiById')
// const { FOOD_KEY } = process.env;

const router = Router();


router.get('/', async (req, res, next) => {
    try {
        const { name } = req.query;
        let getAllRecipes = await allRecipes()    
        
        if (name) {
            let recipeByName = await getAllRecipes.filter(e => e.name.toLowerCase().includes(name.toString().toLowerCase()));
            if (recipeByName.length) {
                let recipes = recipeByName.map(e => {
                    return {
                        image: e.image,
                        name: e.name,
                        dietTypes: e.dietTypes ? e.dietTypes : e.diets.map(e => e.name),
                        score: e.score,
                        id: e.id
                    }
                })
                return res.status(200).send(recipes); 
            }  
            return res.status(404).send('Sorry, recipe not found')
        } else {
            let recipes = getAllRecipes.map(e => {
                return {
                    image: e.image,
                    name: e.name,
                    dietTypes: e.dietTypes ? e.dietTypes : e.diets.map(e => e.name),
                    score: e.score,
                    id: e.id
                }
            })
            return res.status(200).send(recipes);
        }
    } catch {
        return res.status(400).send('invalid input');
    }
});

router.get('/:id', async (req, res, next) => {    
    const { id } = req.params  
    try {
        if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(id)) {
            let dbRecipesById = await dbById(id);            
            return res.status(200).json(dbRecipesById)
        } else { 
            apiRecipesById = await apiById(id)
            if (apiRecipesById.data.id) {
                let recipeDetails =  {                    
                    image: apiRecipesById.data.image,
                    name: apiRecipesById.data.title,
                    dishTypes: apiRecipesById.data.dishTypes,
                    dietTypes: apiRecipesById.data.diets,
                    summary: apiRecipesById.data.summary,
                    score: apiRecipesById.data.spoonacularScore,
                    healthScore: apiRecipesById.data.healthScore,
                    steps: apiRecipesById.data.analyzedInstructions[0]?.steps.map(e => {
                        return {
                            number: e.number,
                            step: e.step
                        }
                    })
                }
                return res.status(200).send(recipeDetails); 
            }
        } 
    } catch {
        return res.status(404).send('Recipe not found')
    }
});
    
    
module.exports = router;