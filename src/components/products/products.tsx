import {Options} from "../../components/options/options.tsx";
import {ProductCard} from "../../components/product-card/product-card.tsx";
import styles from './products.module.scss'
import {Sidebar} from "../sidebar/sidebar.tsx";
import {cardData} from "../../products-db.ts";


export const Products = () => {
    return (
        <div className={styles.products}>
            <Sidebar/>
            <div className={styles.productsContainer}>
                <Options/>
                <div>
                    {cardData.map(el => < ProductCard key={el.id} {...el}/>)}
                </div>
            </div>
        </div>)
}


