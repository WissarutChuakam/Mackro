exports.getProductLanding = (req,res,next)=>{
    res.json({message : "Get product landing page"})
}
exports.getProducts = (req,res,next)=>{
    const {search, promotion, brand, category} = req.query;

    res.json( {search, promotion, brand, category} )
}
exports.getProductById = (req,res,next)=>{
    const {productId} = req.params;
    res.json({productId})
}