import {action, makeObservable, observable} from "mobx";
import {ProductType} from "../types.ts";
import {instance} from "../api/api.ts";

class DataStore {
    products: ProductType[] = []
    productsInBasket: ProductType[] = []
    currentProduct: ProductType | null = null

    constructor() {
        makeObservable(this, {
            products: observable,
            currentProduct: observable,
            productsInBasket: observable,
            getProducts: action,
            getProductById: action,
            addProductInBasket: action,
            deleteProductInBasket: action,
        });
    }

    addProductInBasket(product: ProductType) {
        this.productsInBasket.push(product)
    }

    deleteProductInBasket(product: ProductType) {
       this.productsInBasket =  this.productsInBasket.filter((p: ProductType) => {
           return p.id != product.id})
    }

    async getProductById(productId: number) {
        const product = await instance.get(`./product/${productId}`)
        this.currentProduct = product.data
    }

    async getProducts(queryParams: string) {
        const products = await instance.get(`./products/${queryParams}`)
        this.products = products.data
    }
}

export const store = new DataStore();


