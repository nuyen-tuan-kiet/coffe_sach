import express from "express";
import authenticateToken from '../controller/auther/authenticationtoken';
import {get_all_bill} from '../controller/sale/get_sale'
const router = express.Router();


router.get("/getbillproduct",authenticateToken,get_all_bill);

export default router;