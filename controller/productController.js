const { where } = require("sequelize");
const Product = require("../models/product");
exports.addProducts = async (req, res) => {
  try {
    const { title, price, imageUrl, description } = req?.body;
    await Product.create({
      title,
      price,
      imageUrl,
      description,
    });
    res.send({ message: "user create successfully", success: 1 });
  } catch (err) {
    res.send({ message: "Something went wrong", err, success: 0 });
  }
};
exports.getAllProducts = async (req, res) => {
  try {
    const productsRes = await Product.findAll({
      where: {
        id: 5,
      },
    });
    const allProducts = productsRes.map((item) => item.toJSON());
    console.log(allProducts);

    res.send({ data: allProducts, success: 1 });
  } catch (err) {
    res.send({ message: "Something went wrong", err, success: 0 });
  }
};

exports.updateSpecifiedItem = async (req, res) => {
  try {
    const { title, price, imageUrl, description, id } = req?.body;

    await Product.update(
      {
        title,
        price,
        imageUrl,
        description,
      },
      {
        where: {
          id,
        },
      }
    );
    res.send({ success: 1, res: "update product successfully" });
  } catch (err) {
    res.send({ message: "Something went wrong", err, success: 0 });
  }
};

exports.deleteSpecifiedItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.destroy({
      where: {
        id,
      },
    });
    res.send({ message: "Product delete successfully", success: 1 });
  } catch (err) {
    res.send({ message: "Something went wrong", success: 0, err });
  }
};
