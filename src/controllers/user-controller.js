const User = require("../models/user-model");

const addUser = async (req, res) => {
  try {
    let { name, email, phoneNo, hobby } = req.body;
    await User.create({
      name,
      email,
      phoneNo,
      hobby,
    });
    res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    res.status(500).json({ message: "failed", error });
  }
};

const getUsers = async (req, res) => {
  try {
    const resumeData = await User.find();
    return res.status(200).json(resumeData);
  } catch (err) { 
    return res.status(500).json(err);
  }
};

const updateUser = async (req, res) => {
  try {
    let id = req.params;
    let data = req.body;
    await User.updateOne(id, data);
    return res.status(200).json({ message: "Details saved successfully" });
  } catch (error) {
    return res.status(500).json({ message:"Something wrong happen",error });
  }
};

module.exports = {
  addUser,
  getUsers,
  updateUser
};
