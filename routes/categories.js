const express = require("express")
const CategoryController = require("../controllers/CategoryController")
const router = express.Router()



router.post("/", CategoryController.create)
router.put("/id/:id",CategoryController.update)
router.delete("/delete/:id",CategoryController.delete)
router.get("/id/:id",CategoryController.getById)
router.get("/name/:name",CategoryController.getOneByName)
router.get("/",CategoryController.getAll)



module.exports = router;