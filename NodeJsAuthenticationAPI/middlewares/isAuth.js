const jwt = require('jsonwebtoken');
const isAuthenticated = async(req,res,next)=>{
    // ! Get the Token from the Header
    const headerObj = req.headers;
    const token = headerObj.authorization.split(" ")[1];
    console.log(headerObj);
    console.log(token)
    // ! Verify the Token
    const verifyToken = await jwt.verify(token,"anyKey",(err,decoded)=>{
        if(err)
        {
            return false
        }
        else
        {
            return decoded;
        }
    })
    // !Save the user into req.obj
    if(verifyToken){
        req.user = verifyToken.id;
        next()
    }
    else{
        const err = new Error("Token Expired Please Login Again")
        next(err)
    }
}

module.exports = isAuthenticated;