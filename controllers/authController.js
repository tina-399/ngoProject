const User = require("../models/User");
const httpError = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidator, loginValidator } = require("../utils/validation");

const register = async (req, res) => {
  // check if all fields are available

  const result = await registerValidator.validateAsync(req.body);
  const { firstName, lastName, email, password } = result;

  // check if email already exists
  const existUser = await User.findOne({ email });
  if (existUser) {
    res.status(400).send({ message: "User already exists" });
    return;
  }

  // hashing he password

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  res.status(201).json({ user });
};

const login = async (req, res) => {
  const result = await loginValidator.validateAsync(req.body);

  const { email, password } = result;

  const emailExist = await User.findOne({ email });
  if (!emailExist) {
    res.status(400).json({ message: "Invalid Credentials" });
    return;
  }

  // check for password
  const isMatch = await User.findOne({ hashedPassword });
  if (!isMatch) {
    res.status(400).json({ message: "Invalid Credentials" });
    return;
  }
  const user = isMatch;

  const passwordCheck = await bcrypt.compare(password, user.password);

  if (!passwordCheck) {
    res.status(400).json({ message: "Invalid Credentials" });
    return;
  }

  // generate token
  const token = jwt.sign({ id: user._id }, "1234567890", {
    expiresIn: "3hr",
  });

  res.status(200).json({ token });
};

const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"] || "";

  token = token.split(" ")[1];
  if (token) {
    const decodedToken = jwt.verify(token, "1234567890");
    req.User = decodedToken.id;
    next();
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
};
module.exports = {
  register,
  login,
  verifyToken,
};
