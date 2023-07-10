const { Category, Sequelize, Product} = require('../models/index.js');
const { Op } = Sequelize;

const CategoryController = {

    create(req, res) {
        Category.create(req.body)
            .then(category => res.status(201).send({ message: 'Category created!', category }))
            .catch(console.error)
    },
    update(req, res) {
        const categoryId = req.params.id;
        const updatedData = req.body;
        Category.update(updatedData, {
            where: {id: categoryId}
        })
        .then(() => {
            res.send("Category updated!");
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send(err);
        });

    },
    delete(req, res) {
        Category.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(category => {
                if (category) {
                    res.send({ message: "This category is deleted!", category});
                }
            })
        },
        getById(req, res) {
            Category.findByPk(req.params.id)
            .then(category => {
                if (category) {
                    res.send(category);
                } else {
                    res.status(404).send({ message: "Sorry! This category was deleted!", category });
                }
            })
            },
            getOneByName(req, res) {
                Category.findOne({
                    where: { name: { [Op.like]: `%${req.params.name}%` } }
                })
                    .then(category => {
                        if (category) {
                            res.send(category);
                        } else {
                            res.status(404).send({ message: "Sorry! We did not find any category with this letter!", category });
                        }
                    })
                },
                getAll(req, res) {
                    Category.findAll({
                        include: [ Product ]
                    })
                        .then(categories => res.send({message: "Categories with products", categories}))
                        .catch(err => {
                            console.error(err);
                            res.status(500).send(err)
                        })

                },
        

}

module.exports = CategoryController;