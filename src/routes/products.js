import express from 'express';
import {
  getProducts,
  addProduct,
  getProductById,
} from '../controllers/products.js';

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', addProduct);

export default router;
