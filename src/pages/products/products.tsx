import styles from './products.module.scss'
import {Sidebar} from "../../components/sidebar/sidebar.tsx";
import {Options} from "../../components/options/options.tsx";
import {ProductCard} from "../../components/product-card/product-card.tsx";
import {observer} from "mobx-react";
import {store} from "../../store/store.ts";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";


export const Products = observer(() => {
    const {search} = useLocation()
    useEffect(() => {
        store.getProducts(search)
    }, [search])
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


