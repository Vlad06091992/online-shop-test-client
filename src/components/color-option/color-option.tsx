import {Checkbox} from "../../../src/components/ui/checkbox/checkbox.tsx";
import {ThemeColors} from "../../../src/types.ts";
import styles from './color-option.module.scss'
import {Typography} from "../../components/ui/typography";

type Props = {
    checked:boolean
    color: ThemeColors
    title: string
    onClick: () => void
}

export const ColorOption = ({color, title, onClick,checked}: Props) => {
    return (<div className={styles.root}>
        <Checkbox checked={checked} onClick={onClick} color={color}/>
        <Typography as={'h3'} variant={'h3'}>{title}</Typography>
    </div>)
}