import {action, makeObservable, observable} from "mobx";
import {ProductType, SortingFieldType, SortingOptionType, ThemeColors} from "../types.ts";
import {instance} from "../api/api.ts";

class DataStore {
    products: ProductType[] = []
    productsInBasket:ProductType[]  = []
    currentProduct:ProductType | null = null
    colorFilters: ThemeColors[] = ["black", "blue", "green"]
    sortingField: SortingFieldType = 'price'
    sortingOption: SortingOptionType = 'asc'


    constructor() {
        makeObservable(this, {
            colorFilters: observable,
            products:observable,
            currentProduct:observable,
            sortingField: observable,
            productsInBasket:observable,
            sortingOption: observable,
            getProducts: action,
            getProductById:action,
            addProductInBasket:action,
        });
    }

    addProductInBasket(product: ProductType) {
        this.productsInBasket.push(product)
    }

   async getProductById(productId: number) {
        const product = await instance.get(`./product/${productId}`)
        this.currentProduct = product.data
        console.log(this.products)
    }

    async getProducts() {
        const products = await instance.get('./products')
        this.products = products.data
    }

}


export const store = new DataStore();


