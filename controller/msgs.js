const fs = require("fs");
const path = require("path");
exports.addMessages = (req, res) => {
  console.log(req?.body, "okk");
  const msgBody = req?.body?.msg;
  console.log({ msgBody });
  fs.appendFile("messageFile.text", msgBody, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Append Content Successfully");
    }
  });
};

exports.allMessages = (req, res) => {
  const filePath = path.join(__dirname, "..", "messageFile.text");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ data, success: 1 });
    }
  });
};
