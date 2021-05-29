const Admin = require("../models/Admin");
const httpError = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidator, loginValidator } = require("../utils/validation");

const registerAdmin = async (req, res) => {
  // check if all fields are available

  const result = await registerValidator.validateAsync(req.body);
  const { firstName, lastName, email, password } = result;

  // check if email already exists
  const existUser = await Admin.findOne({ email });
  if (existUser) {
    res.status(400).send({ message: "User already exists" });
    return;
  }

  // hashing he password

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await Admin.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  res.status(201).json({ admin });
};

const loginAdmin = async (req, res) => {
  const result = await loginValidator.validateAsync(req.body);

  const { email, password } = result;

  const emailExist = await User.findOne({ email });
  if (!emailExist) {
    res.status(400).json({ message: "Invalid Credentials" });
    return;
  }

  // check for password
  const isMatch = await Admin.findOne({ hashedPassword });
  if (!isMatch) {
    res.status(400).json({ message: "Invalid Credentials" });
    return;
  }
  const admin = isMatch;

  const passwordCheck = await bcrypt.compare(password, admin.password);

  if (!passwordCheck) {
    res.status(400).json({ message: "Invalid Credentials" });
    return;
  }

  // generate token
  const token = jwt.sign({ id: admin._id }, "1234567890", {
    expiresIn: "3hr",
  });

  res.status(200).json({ token });
};

const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"] || "";

  token = token.split(" ")[1];
  if (token) {
    const decodedToken = jwt.verify(token, "1234567890");
    req.Admin = decodedToken.id;
    next();
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
};
module.exports = {
  registerAdmin,
  loginAdmin,
  verifyToken,
};
