import express from 'express'
import {connection_db} from './config/connect_db'
import login_auth from "./router/login_admin.js"
import product from './router/product'
import sale from  './router/Sale'
import thamso_add from './router/thamso'
import corsOptionsDelegate from './config/config_cross';
const cors = require('cors');
const app = express()
let port = 8000

app.use(express.json({extended: true, limit: '1mb'}))


// xử lý cors từ client tới server
app.use(cors(corsOptionsDelegate))

// su dung các route
app.use('/api/v1/kiet', login_auth)
app.use('/api/v1/product', product)
app.use('/api/v1/sale', sale)
app.use('/api/v1/getthamso', thamso_add)

app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`)
  } )