const joi = require("joi");

const groupRegisterValidator = joi.object({
    groupName : joi.string().required(),
    groupLocation : joi.string().required(),
    groupEmail : joi.string().required(),
    groupDescription : joi.string(),
    groupCategory : joi.string().required(),
    groupPassword : joi.string().required().min(8)
});

const registerValidator = joi.object({
    firstName : joi.string().required(),
    lastName : joi.string().required(),
    email : joi.string().required(),
    password : joi.string().required().min(8),

});

const loginValidator = joi.object({
    email : joi.string().required(),
    password : joi.string().required(),
});



const createProductValidator = joi.object({
    productName : joi.string().required(),
    price : joi.number().required(),
    quantity : joi.number().required(),
    description : joi.string().required(),
    category:joi.string().required()
});

const updateProductValidator = joi.object({
    productName : joi.string().required(),
    price : joi.number().required(),
    quantity : joi.number().required(),
    description : joi.string().required(),
    category:joi.string().required()
});

module.exports = {
    registerValidator,
    loginValidator,
    groupRegisterValidator,
    createProductValidator,
    updateProductValidator
};
