const express = require("express")
const OrdenController = require("../controllers/OrdenController")
const router = express.Router()

router.post("/", OrdenController.create) 

module.exports = router;