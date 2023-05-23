import express from "express";
import { Router } from "express";
import { login_admin } from "../controller/auther/admin";
import authenticateToken from '../controller/auther/authenticationtoken'
const cors = require('cors');
const router = express.Router();

router.post('/login_admin',login_admin)


export default router;