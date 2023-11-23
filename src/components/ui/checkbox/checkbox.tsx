import {useState} from "react";
import {ThemeColors} from "../../../types.ts";
import styles from "./checkbox.module.scss"
import {CheckedIcon} from "../../../assets/icons/checked-icon.tsx";

type Props = {
    color: ThemeColors
}


export const Checkbox = ({color}: Props) => {
    const [checked, setChecked] = useState(true)

    return <div onClick={()=>{
        setChecked(!checked)
    }} style={{background: `${color}`}} className={styles.round}>
        {checked && (
            <CheckedIcon className={styles.checkedIcon}/>
        )}
    </div>
}