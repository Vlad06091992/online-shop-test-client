import {ThemeColors} from "../../types.ts";
import styles from "./color-item.module.scss"


type Props = {
    color: ThemeColors
}


export const ColorItem = ({color}: Props) => {
    return <div className={`${styles.round} ${styles[color]}`}>
    </div>
}