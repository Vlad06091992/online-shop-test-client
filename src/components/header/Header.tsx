import styles from './Header.module.scss'
import {Basket} from "../basket/basket.tsx";
import Graff from "../../assets/icons/graff.tsx";

export const Header = () => {
    return (<header className={styles.header}>
        <Graff/>
        <Basket productsInBasket={3}/>
    </header>)
}