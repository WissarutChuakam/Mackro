exports.register = (req,res,next)=>{
    const {email,password} = req.body
    res.json({email,password})
}

exports.login = (req,res,next)=>{
    res.json({message : "Login"})
}

exports.forgetPassword = (req,res,next)=>{
    const {email} = req.body;
    //get token
    res.json({email})
}

exports.verifyForgetPassword = (req,res,next)=>{
    const {token} = req.params;
    res.json({token})
}

exports.resetPaasword=(req,res,next) =>{
    const {token} = req.params;
    const {password}= req.body;
    //check token
    //รับpassword
    //เก็บpassword
    res.json({token, password})
}