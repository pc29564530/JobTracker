const express = require("express");
const router = express.Router();
const {
  getItems,
  getItemById,
} = require("../controllers/itemController");

router.get("/", getItems);
router.get("/:id", getItemById);

module.exports = router;