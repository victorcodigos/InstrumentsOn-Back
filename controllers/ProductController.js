const { Product, Sequelize, Category } = require('../models/index.js');
const { Op } = Sequelize;


const ProductController = {

    create(req, res) {
        const newProduct ={
            name:req.body.name,
            type:req.body.type,
            year:req.body.year,
            price:req.body.price,
            image:req.body.image,
        }
        
        Product.create(newProduct)
            .then(product => {
                product.addCategory(req.body.CategoryId)
                res.status(201).send({ message: 'Product created!', product })
            })
            .catch(err =>console.error(err))

    },
    getAll(req, res, next) {
        Product.findAll()
            .then(products => res.send(products))
            .catch(err => {
                console.error(err);
                res.status(500).send(err)
                next()
            })
    },
    getById(req, res) {
        Product.findByPk(req.params.id)
        .then(product => {
            if (product) {
                res.send(product);
            } else {
                res.status(404).send({ message: 'Sorry! We did not find any product with this id! Try again!', product });
            }
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
    getInDesc(req, res) {
        Product.findAll({
            orden: [["price", "DESC"]],
        })
            .then((products) => {
                res.status(200).send(products)
            })
            .catch((error) => {
                console.error("Try again, please!", error)
            })
    }


}



module.exports = ProductController;