const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

router.get("/",userController.getAllUsers)

router.post("/register", authController.register);
router.post("/login", authController.login);

router
  .route("/:id")
  .get(userController.getUser)
  .delete(userController.deleteUser);
  
module.exports = router;
