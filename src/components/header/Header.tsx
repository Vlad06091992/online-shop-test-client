import styles from './Header.module.scss'
import Basket from "../../assets/icons/basket.tsx";
import Graff from "../../assets/icons/graff.tsx";

export const Header = () => {
    return (<header className={styles.header}>
        <Graff/>
        <Basket/>
    </header>)
}