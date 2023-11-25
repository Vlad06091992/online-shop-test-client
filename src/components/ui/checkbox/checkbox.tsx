import {useState} from "react";
import {ThemeColors} from "../../../types.ts";
import styles from "./checkbox.module.scss"
import {CheckedIcon} from "../../../assets/icons/checked-icon.tsx";

type Props = {
    checked:boolean
    color: ThemeColors
    onClick: () => void
}


export const Checkbox = ({color, onClick,checked}: Props) => {
    return <div onClick={() => {
        onClick()
    }} className={`${styles.round} ${styles[color]}`}>
        {checked && (
            <CheckedIcon color={color} className={styles.checkedIcon}/>
        )}
    </div>
}