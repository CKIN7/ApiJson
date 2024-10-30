import { readJSON } from '../utils.js';

const slides = readJSON('./slides.json');
const pages = readJSON('./pages.json');
const products = readJSON('./products.json');
const categories = readJSON('./categories.json');
const cartData = readJSON('./cart.json');

export class StoreModel {
    static async getAllSlides() {
        return slides;
    }
    static async getAllPages() {
        return pages;
    }
    static async getAllProducts() {
        return products;
    }
    static async getAllCategories() {
        return categories;
    }
    // el id empieza _id
    static async getCategoryBySlug(slug) {
        return categories.find((category) => category.slug === slug);
    }

    static async getCartModel(id, style, option) {
        // console.log(id, 'el id pasado');
        const items = cartData.find((item) => {
            // console.log(item, 'console de item Model');
            return item._id === id;
        });
        console.log(items, 'consola de items');
        return items;
    }
}
