const { Product, Sequelize } = require('../models/index.js');
const product = require('../models/product.js');
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
        Product.findByPk(req.params.id, {})
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
                    res.status(404).send({message:'Sorry! We did not find any product with this letter!',product });
                }
            })
    },
    update(req, res) {
        const productId = req.params.id;
        const updatedData = req.body;
      
        Product.update(updatedData, {
          where: {
            id: productId }}
            , (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
          res.send("Product updated!");
        });
      }
}



module.exports = ProductController;