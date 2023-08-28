const { Orden, Product, Sequelize } = require("../models/index")
const { Op } = Sequelize;




const OrdenController = {

  create(req, res) {
    Orden.create(req.body)
      .then(orden => {
        orden.addProduct(req.body.ProductId)
        res.status(200).send({ message: 'Yes! Order placed successfully!', orden })

      })

      .catch(console.error)
  },
  getAll(req, res) {
    Orden.findAll({
      include: [Product]
    })
      .then((orden) => res.send(orden)
      )
      .catch((error) => {
        console.error(error);
        res.status(500).send({message: "Cannot found the products", Orden});
      });
  },

  /*async createOrder(req, res){
    try {
      const products = await Product.findAll({
        where:{ id: req.body.ProductId,},
      })
      let payment = products.reduce((accumulator, product) => {
        return accumulator + product.price;
      }, 0)
      const delivery = await Delivery.findByPk(req.body.delivery);
      payment += delivery.price;
      const orden = await Orden.create({
        ...req.body,
        payment,
        UserId: req.user.id,
      });
      orden.addProduct(req.body.ProductId);
      res.status(201).send({message: "Order created", orden})
    } catch (error) {
      console.log(error)
    }
  }*/
 
}
 


module.exports = OrdenController;

