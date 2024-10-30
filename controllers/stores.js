import { StoreModel } from '../models/store.js';

export class StoreController {
    static async getAllSlides(req, res) {
        const slides = await StoreModel.getAllSlides();
        res.json(slides);
    }
    static async getAllPages(req, res) {
        const pages = await StoreModel.getAllPages();
        res.json(pages);
    }
    static async getAllProducts(req, res) {
        const products = await StoreModel.getAllProducts();
        res.json(products);
    }
    static async getAllCategories(req, res) {
        const categories = await StoreModel.getAllCategories();
        res.json(categories);
    }

    // static async getProductsByCategory(req, res) {
    //     const slug = req.params.slug;
    //     const category = categories.find((category) => category.slug === slug);
    //     if (!category) {
    //         return res.status(404).json({ message: 'Categoría no encontrada' });
    //     }
    //     const products = await Product.find({ category: category._id });
    //     res.json(products);
    // }

    static async getCartController(req, res) {
        // const id = req.params.id;

        const id = req.query.id;
        const style = req.query.style;
        const option = req.query.option;
        // console.log(id);

        const cart = await StoreModel.getCartModel(id, style, option);

        res.json(cart);
        // console.log(cart, 'console de Controller');
    }
}
