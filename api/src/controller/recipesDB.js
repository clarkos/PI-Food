const { Recipe, Diet } = require('../db');

const recipesDb = async () => {
    try {
        const recipesAll = await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ['name']
            }
        });
        const recipes = recipesAll.map((r) => {
            return {
                id: r.id,
                title: r.title,
                summary: r.summary,
                healthScore: r.healthScore,
                instructions: r.instructions,
                diets: r.diets.map(diet => diet.name)
            };
        })
        return recipes;

    } catch (e) {
        console.log(e);
        return false;
    };
};

module.exports = recipesDb;

