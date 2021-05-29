const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groupController");

router.get("/", groupController.getAllGroup);
router.get("/:id", groupController.getGroup);
router.post("/", groupController.createGroup);
router.patch("/:id", groupController.updateGroup);
router.delete("/:id", groupController.deleteGroup);

module.exports = router;
