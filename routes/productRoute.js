const express = require("express");
const router = express.Router();
const routerController = require("../controller/productController");
router.post("/add-items", routerController.addProducts);
router.get("/all-items", routerController.getAllProducts);
router.put("/update-item", routerController.updateSpecifiedItem);
router.delete("/delete-item/:id", routerController.deleteSpecifiedItem);
module.exports = router;
