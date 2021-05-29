const Admin = require("../models/Admin");

const getAllAdmins = async (req, res) => {
  const admin = await User.find();
  res.status(200).json({ admin });
};

const getAdmin = async (req, res) => {
  const { adminId } = req.params;
  const admin = await Group.findById(adminId);
  res.status(200).json({ admin });
};

// const updateGroup = async (req, res) => {
//   const { groupId } = req.params;
//   const group = await Group.findByIdAndUpdate(groupId, req.body, { new: true });
//   res.status(200).json({ group });
// };

const deleteAdmin = (req, res) => {
  const admin = Admin.findByIdAndDelete();
  res.status(200).json({ admin });
};

module.exports = {
  getAllAdmins,
  getAdmin,
  deleteAdmin,
};
