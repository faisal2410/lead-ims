const Product=require("../models/product")
exports.createProductService = async (data) => {
    const product = await Product.create(data);
    return product;
  };

  
  