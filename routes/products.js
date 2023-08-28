const express = require("express")
const ProductController = require("../controllers/ProductController")
const { authentication, isAdmin } = require("../middleware/authentication")
const router = express.Router()


router.post("/",authentication,ProductController.create) 
router.get("/all",ProductController.getAll)
router.get("/id/:id",ProductController.getById)
router.get("/name/:name",ProductController.getOneByName)
router.put("/id/:id",authentication,ProductController.update)
router.get("/price/:price",ProductController.getByPrice)
router.get("/highertolower", ProductController.getInDesc)
router.delete("/delete/:id",authentication, isAdmin, ProductController.delete)



module.exports = router;