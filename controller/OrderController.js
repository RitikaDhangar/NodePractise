const Order = require("../model/Order");
const Razorpay = require("razorpay");
require("dotenv").config();
exports.purchasePremium = async (req, res) => {
  try {
    const rzp = new Razorpay({
      key_id: process.env.PAYMENT_SECRET_ID,
      key_secret: process.env.PAYMENT_SECRET_KEY,
    });
    const amount = 200000;
    rzp.orders.create({ amount, currency: "INR" }, async (err, order) => {
      if (err) {
        return res.send({ message: "Something went wrong", success: 0, err });
      }
      try {
        await req.user.createOrder({ orderid: order.id, status: "PENDING" });
        res.send({ order, key_id: rzp.key_id, success: 1 });
      } catch (err) {
        res.send({ message: "Something went wrong", success: 0, err });
      }
    });
  } catch (err) {
    res.send({ message: "Something went wrong", success: 0, err });
  }
};
exports.premiumMember = async (req, res) => {
  try {
    const { payment_id, order_id } = req.body;
    const order = await Order.findOne({
      where: {
        orderid: order_id,
      },
    });
    const UpdatedOrder = order.update({
      paymentid: payment_id,
      status: "SUCCESS",
    });
    const UpdatedUser = req.user.update({
      isPremiumUser: true,
    });
    Promise.all([UpdatedOrder, UpdatedUser])
      .then(() => {
        return res.send({ message: "Tranaction Successful", success: 1 });
      })
      .catch((err) => {
        return res.send({ message: "Something went wrong", success: 0, err });
      });
  } catch (err) {
    res.send({ message: "Something went wrong", success: 0, err });
  }
};
