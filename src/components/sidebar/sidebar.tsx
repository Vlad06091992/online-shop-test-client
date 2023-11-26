import {Typography} from "../../components/ui/typography";
import {ColorOption} from "../../components/color-option/color-option.tsx";
import styles from "./sidebar.module.scss"
import {Button} from "../../components/ui/button/button.tsx";
import {ColorOptionsType, ThemeColors} from "../../types.ts";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";


const colorOptions: ColorOptionsType = [
    {color: "black", title: "Черный"},
    {color: "blue", title: "Синий"},
    {color: "green", title: "Зеленый"},
    {color: "purple", title: "Фиолетовый"},
    {color: "white", title: "белый"},
]

export const Sidebar = () => {
    const [colors, setColors] = useState<ThemeColors[]>([])
    const [, setSearchParams] = useSearchParams();
    useEffect(() => {
        setSearchParams((params) => {
            if (colors.length > 0) {
                params.set("colors", colors.join())
            } else {
                params.delete("colors")
            }
            return params
        })
    }, [colors, setSearchParams]);

    return (<div className={styles.root}>
        <Typography className={styles.titleH1} as={'h1'}>Смартфоны</Typography>
        <Typography className={styles.titleH2} variant={'h2'} as={'h2'}>Цвет</Typography>
        <div>
            {colorOptions.map(el => <ColorOption checked={colors.includes(el.color)} onClick={() => {
                if (!colors.includes(el.color)) {
                    setColors([...colors, el.color])
                } else {
                    setColors(colors.filter(c => c != el.color))
                }
            }} key={el.color} color={el.color} title={el.title}/>)}
        </div>
        <Button className={styles.resetButton} onClick={() => {

            setSearchParams((params) => {
                setColors([])
                params.delete("colors")
                return params
            })
        }} variant={'tertiary'}>
            <Typography as={'span'} variant={'tertiaryButton'}>
                Сбросить параметры
            </Typography>
        </Button>
    </div>)
}