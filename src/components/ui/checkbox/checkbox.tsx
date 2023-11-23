import {useState} from "react";
import {ThemeColors} from "../../../types.ts";
import styles from "./checkbox.module.scss"
import {CheckedIcon} from "../../../assets/icons/checked-icon.tsx";

type Props = {
    color: ThemeColors
    onClick: () => void
}


export const Checkbox = ({color, onClick}: Props) => {
    const [checked, setChecked] = useState(true)

    return <div onClick={() => {
        setChecked(!checked)
        onClick()
    }} className={`${styles.round} ${styles[color]}`}>
        {checked && (
            <CheckedIcon className={styles.checkedIcon}/>
        )}
    </div>
}