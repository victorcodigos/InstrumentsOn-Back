const { Product, Sequelize } = require('../models/index.js');
const { Op } = Sequelize;


const ProductController = {

    create(req, res) {
        Product.create(req.body)
            .then(product => res.status(201).send({ message: 'Product created!', product }))
            .catch(console.error)
    },
    getAll(req, res) {
        Product.findAll()
            .then(products => res.send(products))
            .catch(err => {
                console.error(err);
                res.status(500).send(err)
            })
    },
    getById(req, res) {
        Product.findByPk(req.params.id)
            .then(product => res.send(product))
            .catch((err) => {
                console.error(err);
                res.status(500).send(err)
            })
    },
    getOneByName(req, res) {
        Product.findOne({
            where: { name: { [Op.like]: `%${req.params.name}%` } }
        })
            .then(product => {
                if (product) {
                    res.send(product);
                } else {
                    res.status(404).send({ message: 'Sorry! We did not find any product with this letter!', product });
                }
            })
    },
    update(req, res) {
        const productId = req.params.id;
        const updatedData = req.body;
        Product.update(updatedData, {
            where: { id: productId }
        })
            .then(() => {
                res.send("Product updated!");
            })
    },
    delete(req, res) {
        Product.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(product => {
                if (product) {
                    res.send({ message: 'This product is deleted!' });
                }
            })
    },
    getByPrice(req, res) {
        const price = req.params.price;
        Product.findOne({ where: { price: price } })
            .then((product) => {
                if (product) {
                    res.send(product);
                } else {
                    res.status(404).send(`We did not find any product with this ${price}.`);
                }
            })

    },


}



module.exports = ProductController;