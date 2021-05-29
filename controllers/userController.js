const User = require("../models/User");

const getAllUsers = async (req, res) => {
  const user = await User.find();
  res.status(200).json({ user });
};

const getUser = async (req, res) => {
  const { userId } = req.params;
  const user = await Group.findById(userId);
  res.status(200).json({ user });
};

// const updateGroup = async (req, res) => {
//   const { groupId } = req.params;
//   const group = await Group.findByIdAndUpdate(groupId, req.body, { new: true });
//   res.status(200).json({ group });
// };

const deleteUser = (req, res) => {
  const user = User.findByIdAndDelete();
  res.status(200).json({ user });
};

module.exports = {
  getAllUsers,
  getUser,
  deleteUser,
};
