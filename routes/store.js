const express = require("express");
const router = express.Router();
const messageController = require("../controller/msgs");
router.post("/Store-message", messageController.addMessages);
router.get("/show-message", messageController.allMessages);
module.exports = router;
