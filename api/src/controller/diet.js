const { Diet } = require('../db.js');

let diets = [
	{
		name: 'gluten free',
	},
	{
		name: 'ketogenic',
	},
	{
		name: 'vegetarian',
	},
	{
		name: 'lacto-vegetarian',
	},
	{
		name: 'ovo-vegetarian',
	},
	{
		name: 'vegan',
	},
	{
		name: 'pescetarian',
	},
	{
		name: 'paleo',
	},
	{
		name: 'primal',
	},
	{
		name: 'whole 30',
	},
];

function getDiets(req, res, next) {
	Diet.findAll()
		.then((response) => {
			if (response.length > 0) {
				return res.json(response).status(200);
			} else {
				Diet.bulkCreate(diets)
					.then((response) => {
						return res.json(response);
					})
					.catch((error) => next(error));
			}
		})
		.catch((error) => next(error));
}

module.exports = {
	getDiets,
};
