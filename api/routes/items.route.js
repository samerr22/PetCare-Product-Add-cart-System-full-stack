import  express  from "express";
import { verifyToken } from '../utils/VerfiyUser.js';
import { Cartcrete, CheckOutcrete, Itcreate,  checkout, deleteItems, deleteItemss, getAllItems, getCartItem, getitems } from "../controllers/items.controller.js";



const router = express.Router();

router.post('/Itcreate', verifyToken, Itcreate);
router.get('/getAllItems', getAllItems);
router.get('/getItem/:ItemsId', getitems);
router.post('/Cart',  Cartcrete);
router.get('/cartitem/:CurrentuserId', getCartItem)
router.post('/Checkout',  CheckOutcrete);
router.delete('/deleteitems/:itemsId',  deleteItems)
router.delete('/deletCurretId/:CurrentuserId',  deleteItemss)
router.get('/itemDetails/:CurrentuserId', checkout)





export default router;