
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')


const authenticateToken =  (req,res, next) => {
      //In express, we can use request.headers['header-name'], 
      //For example if you have set up a Bearer token in authorization header and want to retrieve the token, 
      //then you should write req.headers['authorization'], and you will get the string containing 'Bearer tokenString'.
      //trong trường hợp trên ta dùng bearer trong reqest-header

      const header = req.headers["authorization"];
      const  token =  header.split(" ")[1];
      if( token  == undefined ) next();
    
         try{
            jwt.verify(token, process.env.secret_key);
            next();
         }
         catch(erro){
            return res.send({status:"401",message:"Token hết hạn ,yêu cầu đăng nhập lại", success: "false",});
         }
   
        
     
     
}

export default authenticateToken;