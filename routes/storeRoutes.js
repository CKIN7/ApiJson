import { Router } from 'express';
import { StoreController } from '../controllers/stores.js';

export const storeRouter = Router();

storeRouter.get('/slides', StoreController.getAllSlides);
storeRouter.get('/pages', StoreController.getAllPages);
storeRouter.get('/products', StoreController.getAllProducts);
storeRouter.get('/categories', StoreController.getAllCategories);

// storeRouter.get('/categories/:slug', StoreController.getProductsByCategory);

//habia que quitar el /:id
storeRouter.get('/cart/', StoreController.getCartController);
