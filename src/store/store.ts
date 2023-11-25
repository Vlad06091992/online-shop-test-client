import {action, makeObservable, observable} from "mobx";
import {ProductType, SortingFieldType, SortingOptionType, ThemeColors} from "../types.ts";
import {instance} from "../api/api.ts";

class DataStore {
    products: ProductType[] = []
    querySearchParams ={
        // colorFilters : ["black", "blue", "green"],
        // sortingField:  'price',
        sortingOption:  'asc',
    }
    productsInBasket:ProductType[]  = []
    currentProduct:ProductType | null = null
    colorFilters: ThemeColors[] = ["black", "blue", "green"]
    sortingField: SortingFieldType = 'price'
    sortingOption: SortingOptionType = 'asc'


    constructor() {
        makeObservable(this, {
            querySearchParams:observable,
            colorFilters: observable,
            products:observable,
            currentProduct:observable,
            sortingField: observable,
            productsInBasket:observable,
            sortingOption: observable,
            setQuerySearchParams:action,
            getProducts: action,
            getProductById:action,
            addProductInBasket:action,
        });
    }

    setQuerySearchParams(){}

    addProductInBasket(product: ProductType) {
        this.productsInBasket.push(product)
    }

    async getProductById(productId: number) {
        const product = await instance.get(`./product/${productId}`)
        this.currentProduct = product.data
    }

    async getProducts(search:string) {
        const products = await instance.get(`./products/${search}`)
        this.products = products.data
    }

}


export const store = new DataStore();


