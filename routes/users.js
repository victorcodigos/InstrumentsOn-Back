const express = require("express")
const UserController = require("../controllers/UserController")
const { authentication } = require("../middleware/authentication")
const router = express.Router()

router.post("/", UserController.create)
router.post("/login",UserController.login)
router.delete("/logout",authentication,UserController.logout)
router.get("/getInfo", authentication,UserController.getById)
router.get("/getUserProducts",UserController.getById)


module.exports = router;

