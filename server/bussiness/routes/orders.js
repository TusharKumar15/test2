import express from 'express';
import { getOrders, getMenu, postMenu } from '../controllers/orders.js';
import { validJWT, checkUser } from '../middleware.js';
// import { checkUser } from '../middleware.js';
// import {getMenu} from '../controllers/item_menu.js'

const router = express.Router();

router.get('/orders', validJWT, checkUser, getOrders);
router.get('/food_menu',validJWT, checkUser, getMenu);
// router.post('/food_menu',validJWT, checkUser, postMenu);
router.post('/food_menu', postMenu);
// router.get('/test', (req, res) => res.send('this is test route'));

export default router;