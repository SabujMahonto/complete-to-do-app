const profileModel = require("../model/profileModel");

exports.createProfile = (req, res) => {
  let reqBody = req.body;
  profileModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};
