const express = require("express")
const OrdenController = require("../controllers/OrdenController")
const router = express.Router()

router.post("/", OrdenController.create)
router.get("/",OrdenController.getAll)
router.get("/all",OrdenController.getAll)

module.exports = router;