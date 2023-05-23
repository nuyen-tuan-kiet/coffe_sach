import express from "express";
import authenticateToken from '../controller/auther/authenticationtoken';
import {all_product} from '../controller/product/getallproduct';
import {type_product} from '../controller/product/gettypeproduct'
import { addproduct } from "../controller/product/add_product"
const router = express.Router();


router.get("/getallproduct",authenticateToken,all_product);
router.get("/gettypeproduct",authenticateToken,type_product);
router.post("/add_product",authenticateToken,addproduct);
export default router;