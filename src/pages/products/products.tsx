import styles from './products.module.scss'
import {Sidebar} from "../../components/sidebar/sidebar.tsx";
import {Options} from "../../components/options/options.tsx";
import {ProductCard} from "../../components/product-card/product-card.tsx";
import {observer} from "mobx-react";
import {store} from "../../store/store.ts";


export const Products = observer(() => {
    return (
        <div className={styles.products}>
            <Sidebar/>
            <div className={styles.productsContainer}>
                <Options/>
                <div>
                    {store.products.map(el => < ProductCard key={el.id} {...el}/>)}
                </div>
            </div>
        </div>)
})


