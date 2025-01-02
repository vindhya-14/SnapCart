const productModel = require('../models/productModel')

//Get products Api - /api/v1/products
exports.getProducts = async (req,res,next) => {
    const query =req.query.keyword ? {name : {
        $regex:req.query.keyword,
        $options:'i'
    }} : {}
    const products = await productModel.find(query);
    res.json (
        {
            success: true,
            message: 'Get products working!',
            products
        }
    )
}
//Get products Api - /api/v1/product/:id
exports.getSingleProducts = async(req,res,next) => {
    console.log(req.params.id,'ID')
    
    try {const product = await productModel.findById(req.params.id);
    res.json (
        {
            success: true,
            message: 'Get single product working!',
            product
        }
    )}
    catch(error)
    {
        res.status(404).json(
            {
                success: false,
                message: error.message
            }
        )
    }
}