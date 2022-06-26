import express from 'express';
import { getShops, myOrders } from '../controllers/shops.js';
import { validJWT, checkUser } from '../middleware.js';

const router = express.Router();

router.get('/eateries', validJWT, checkUser, getShops);
router.get('/myOrders', validJWT, checkUser, myOrders);

export default router;