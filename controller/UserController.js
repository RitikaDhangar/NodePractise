const User = require("../model/User");
exports.postuserInfo = async (req, res) => {
  try {
    const { username, useremail, userpassword } = req.body;
    if (!username || !useremail || !userpassword) {
      return res.send({ message: "Enter all Fields", success: 0 });
    }
    const isUserExist = await User.findOne({
      where: {
        useremail,
      },
    });
    if (isUserExist) {
      return res.send({ message: "User already Exist", success: 0 });
    }

    await User.create({
      useremail,
      username,
      userpassword,
    });
    return res.send({ message: "Create User Successfully", success: 1 });
  } catch (err) {
    res.send({ message: "something west wrong", success: 0, err });
  }
};
exports.loginUser = async (req, res) => {
  try {
    const { useremail, userpassword } = req.body;
    if (!useremail || !userpassword) {
      return res.send({ message: "Enter all Fields", success: 0 });
    }
    const isUserExist = await User.findOne({
      where: {
        useremail,
        userpassword,
      },
    });
    if (isUserExist) {
      return res.send({ message: "User LoggedIn Successfully", success: 1 });
    } else {
        return res.send({ message: "User crediental are invalid", success: 0 });
    }
  } catch (err) {
    res.send({ message: "something west wrong", success: 0, err });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    let allusers = await User.findAll({
    });
    allusers = allusers.map((item) => item.toJSON());
    return res.send({ message: "All users list", success: 1,data:allusers });
  } catch (err) {
    res.send({ message: "something west wrong", success: 0, err });
  }
};
