const {Orden, Product, Sequelize} = require("../models/index")
const { Op } = Sequelize;




const OrdenController = {

    create(req, res){
        Orden.create(req.body)
        .then(orden => {
            orden.addProduct(req.body.ProductId)
            res.status(200).send({message: 'Yes! Order placed successfully!', orden})
            
        })
        
        .catch(console.error)
    },
}


module.exports = OrdenController;

