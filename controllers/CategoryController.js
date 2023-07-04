
const { Category } = require('../models/index.js');

const CategoryController = {

    create(req, res) {
        Category.create(req.body)
            .then(category => res.status(201).send({ message: 'Category created!', category }))
            .catch(console.error)
    },
}

module.exports = CategoryController;