const Products = require("../models/Products");
const Groups = require("../models/Group");
const {
  updateProductValidator,
  createProductValidator,
} = require("../utils/validation");

const getAllProdutcs = async (req, res) => {
  const products = await Products.find();
  res.status(200).json({ products });
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Products.findById(id);
  res.status(200).json({ product });
};

const getProductByGroup = async (req, res) => {
  const product = await Products.findById({ groupId: req.admin });
  res.status(200).json({ product });
};

// const UpdateProduct =async (req,res)=>{
//     const {id} = req.params
//     const {productName,price,quantity,category,description} = req.body

//     if (productName||price||quantity||category||description){
//     return res.status(400).json({ message: "Text cannot be empty." });

//     }
//     const Product = await Products.findByIdAndUpdate()
//     res.status(200).json({Product})
// }

const createProduct = async (req, res) => {
  // get the group
  const group = await Groups.findById(req.admin);

  //   check if group exists
  if (!group) {
    throw new Error("Pharmacy does not exist");
  }
  const product = await Product.create({
    groupId: req.admin,
    ...req.body,
  });

  //   adding produc to group
  group.products.push(product._id);
  await group.save();
  res.status(201).json({ product });
};

const deleteProduct = async (req, res) => {
  // get the group
  const group = await Groups.findById(req.admin);
  const product = await Products.findById(req.params.id);

  //   check if group exists
  if (!product) {
    throw new Error("Product does not exist");
  }
  if (!group) {
    throw new Error("Product does not exist");
  }

  if (!product.groupId.equals(group._id)) {
    throw new Error("You are not permitted to perform this operation");
  }
  await Products.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Pruduct deleted successfully" });

  res.status(500).json({ error: error.message });
};

module.exports = {
  getAllProdutcs,
  getProductByGroup,
  getProductById,
  createProduct,
};
