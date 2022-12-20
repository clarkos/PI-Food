const { Recipe, Diet } = require('../db');

const recipesDb = async () => {
    try {
        const recipesAll = await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ['title']
            }
        });
        const recipes = recipesAll.map((r) => {
            return {
                id: r.id,
                title: r.title,
                summary: r.summary,
                score: r.score,
                healthScore: r.healthScore,
                instructions: r.instructions,
                diets: r.diets.map(diet => diet.title)
            };
        })
        return recipes;

    } catch (e) {
        console.log(e);
        return false;
    };
};

module.exports = recipesDb;

