const express = require("express")
const ProductController = require("../controllers/ProductController")
const { authentication } = require("../middleware/authentication")
const router = express.Router()


router.post("/",authentication, ProductController.create) 
router.get("/",ProductController.getAll)
router.get("/id/:id",ProductController.getById)
router.get("/name/:name",ProductController.getOneByName)
router.put("/id/:id",authentication,ProductController.update)
router.delete("/delete/:id",authentication,ProductController.delete)
router.get("/price/:price",ProductController.getByPrice)



module.exports = router;