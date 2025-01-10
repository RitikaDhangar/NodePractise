const express = require("express");
const router = express.Router();
const Product = require("../models/product");
router.post("/add-items", async (req, res) => {
    console.log("inside1")
  try {
    const title = req?.body?.title;
    const price = req?.body?.price;
    const imageUrl = req?.body?.imageurl;
      const description = req?.body?.description;
       await Product.create({
      title,
      price,
      imageUrl,
      description,
    });
    res.send({ message: "user create successfully", success: 1 });
  } catch (err) {
    console.log(err);
  }
});
router.get("/all-items", async (req, res) => {
    try {
        const newres = await Product.findAll();
        console.log(newres.map(user => user.toJSON())); // Print all users
    } catch (err) {
        console.log(err);
    }
})
module.exports = router;
