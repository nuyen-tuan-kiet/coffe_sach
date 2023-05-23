const dotenv = require('dotenv');
var cors = require('cors');

//  bài post handle cors
//https://www.codingdeft.com/posts/nodejs-react-cors-error/
// https://blog.logrocket.com/the-ultimate-guide-to-enabling-cross-origin-resource-sharing-cors/
// https://viblo.asia/p/cors-la-gi-cors-voi-nodejs-Qbq5QyyL5D8

// sett up như này là nhằ cho nhiều domain khác truy cập mà đây chỉ mới có 1
const whitelist = ["http://localhost:3000"]

const corsOptionsDelegate = {
  origin: function (origin, callback) 
  {
    if (!origin || whitelist.indexOf(origin) !== -1) 
    {
      callback(null, true)
    } 
    else 
    {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true, 
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE']
}

export default corsOptionsDelegate