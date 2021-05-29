const Group = require("../models/Group");

const getAllGroup = async (req, res) => {
  const groups = await Group.find();
  res.status(200).json({ groups });
};

const getGroup = async (req, res) => {
  const { groupId } = req.params;
  const group = await Group.findById(groupId);
  res.status(200).json({ group });
};



const createGroup = async (req, res) => {
  const {
    groupName,
    groupEmail,
    groupCategory,
    groupDescription,
    groupLocation,
  } = req.body;
  const group = await Group.create({
    groupName,
    groupEmail,
    groupCategory,
    groupDescription,
    groupLocation,
  });
  res.status(201).json({ group });
};

const updateGroup = async (req, res) => {
  const { groupId } = req.params;
  const group = await Group.findByIdAndUpdate(groupId, req.body, { new: true });
  res.status(200).json({ group });
};

const deleteGroup = (req, res) => {
  const group = Group.findByIdAndDelete();
  res.status(200).json({ group });
};

module.exports = {
  getAllGroup,
  getGroup,
  createGroup,
  updateGroup,
  deleteGroup,
};
