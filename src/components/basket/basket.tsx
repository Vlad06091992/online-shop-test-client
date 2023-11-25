import BasketIcon from "../../assets/icons/basket-icon.tsx";
import styles from "./basket.module.scss"
import {observer} from "mobx-react";
import {store} from "../../store/store.ts";


export const Basket = observer(() => {
    const productsInBasket= store.productsInBasket.length

    return (<div className={styles.root}>
        <BasketIcon/>
        {!!productsInBasket && <div className={styles.round}>{productsInBasket}</div>}
    </div>)
})