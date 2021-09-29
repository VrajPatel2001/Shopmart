const express = require('express')
const router = express.Router()

const userService = require("../services/UserService");


module.exports = router;

router.post("/createAUser",userService.createAUser)

router.get("/getAUser/:id",userService.getAUser)


module.exports = router