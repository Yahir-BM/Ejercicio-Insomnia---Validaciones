const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get("/", userController.findAll);
router.get("/:id", userController.findById);
router.post("/", userController.addUser);
router.put("/:id", userController.updateUser);

module.exports = router;