const express = require("express");
const router = express.Router();
const adminAuthController = require("../controllers/adminAuthController");
const adminController = require("../controllers/adminController");

router.get("/", adminController.getAllUsers);

router.post("/register", adminAuthController.register);
router.post("/login", adminAuthController.login);

router
  .route("/:id")
  .get(adminController.getUser)
  .delete(adminController.deleteUser);

module.exports = router;
