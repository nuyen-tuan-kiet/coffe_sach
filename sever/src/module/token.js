

var jwt = require('jsonwebtoken');


export const generate_token = async (payload, secretkey,  tokenlife) =>{

 try {
      return  await jwt.sign( payload, secretkey, tokenlife)
 } catch (error) {
        return null
 }
}



