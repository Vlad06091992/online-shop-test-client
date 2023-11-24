import BasketIcon from "../../assets/icons/basket-icon.tsx";
import {ColorItem} from "../color-item/color-item.tsx";
import styles from "./basket.module.scss"

type Props = {
    productsInBasket: number
}

export const Basket = ({productsInBasket}: Props) => {
    return (<div className={styles.root}>
        <BasketIcon/>
        {productsInBasket && <div className={styles.round}>{productsInBasket}</div>}
    </div>)
}