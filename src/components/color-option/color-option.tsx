import {Checkbox} from "../../../src/components/ui/checkbox/checkbox.tsx";
import {ThemeColors} from "../../../src/types.ts";
import styles from './color-option.module.scss'
import {Typography} from "../../components/ui/typography";

type Props = {
    color: ThemeColors
    title: string
    onClick: () => void
}

export const ColorOption = ({color, title, onClick}: Props) => {
    return (<div className={styles.root}>
        <Checkbox onClick={onClick} color={color}/>
        <Typography as={'h3'} variant={'h3'}>{title}</Typography>
    </div>)
}