import express from "express";
import authenticateToken from '../controller/auther/authenticationtoken';
import {get_thamso_add} from '../controller/thamso/get_thamso_add';
import {get_thamso_timkiem} from '../controller/thamso/get_tham_so_timkiem';
const router = express.Router();


router.get("/get_thamso_add",authenticateToken, get_thamso_add);
router.get("/get_thamso_timkiem",authenticateToken, get_thamso_timkiem);

export default router;