const { Schema, model, models } = require("mongoose");

const productSchema = new Schema({

  groupId:{
    type:Schema.Types.ObjectId,
    ref:"Group"
  },
  productImage: {
    type: String,
    require: [true, "Please provide an Image"],
  },
  productName: {
    type: String,
    require: [true, "Please Provide a Product name"],
  },
  price: {
    type: Number,
    require: [true, "Please Provide a Product qrice"],
  },
  quantity: {
    type: Number,
    require: [true, "Please Provide a Product quantity"],
  },
  description: {
    type: String,
    require: [true, "Please Provide a Product description"],
  },
  category: {
    type: String,
    require: [true, "Please Provide a Product categories"],
  },
  
},{timestamps:true});

module.exports = model("Product", productSchema);
