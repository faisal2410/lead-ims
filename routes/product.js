const router = require("express").Router();
const {createProduct}=require("../controllers/product")

// router.get("/",(req,res)=>{
//     res.status(200).json({
//         status: 200,
//         message:"Welcome to Lead Inventory Management System"
//     })
// })

router.post("/",createProduct)
module.exports = router;