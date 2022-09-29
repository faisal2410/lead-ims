const {createProductService}=require("../services/product")
exports.createProduct = async (req, res, next) => {
    try {
      // save or create
  
      const result = await createProductService(req.body);
  
  
      res.status(200).json({
        status: "success",
        messgae: "Data inserted successfully!",
        data: result,
        ostad:"Ostad Mern class"
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: " Data is not inserted ",
        error: error.message,
      });
    }
  };