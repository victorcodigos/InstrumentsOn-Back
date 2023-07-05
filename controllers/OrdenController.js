 const { Orden } = require('../models/index.js');

const OrdenController = {

    create(req, res){
        Orden.create(req.body)
        //addProduct... crea en tabla intermedia
        .then(orden => res.status(200).send({message: 'Yes! Order placed successfully!', orden}))
        .catch(console.error)
    },


}


module.exports = OrdenController;

