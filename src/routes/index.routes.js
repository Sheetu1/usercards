const express = require('express');
const router = express.Router();

const {indexController,createController,allUsersController,deleteController,UserDetailsController} = require('../controllers/index.controller')

router.get('/',indexController)

router.post("/create", createController)

router.get("/allUsers", allUsersController)

router.get('/details/:id',UserDetailsController)


router.get("/delete/:id", deleteController)

module.exports = router;
