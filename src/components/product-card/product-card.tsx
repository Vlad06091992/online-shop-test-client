import {ProductType} from "../../../src/types.ts";
import styles from "./product-card.module.scss"
import {Typography} from "../ui/typography";
import {ColorItem} from "../../components/color-item/color-item.tsx";
import {Button} from "../../components/ui/button/button.tsx";


export const ProductCard = ({colors, desc, id, name, popularity, image, price}: ProductType) => {
    return (<div className={styles.root}>
        <div className={styles.image}>
            <img alt={name} src={image}/>
        </div>
        <div className={styles.section}>
            <Typography as={'h2'} variant={'h2'}>{name}</Typography>
            <div className={styles.colors}>{
                colors.map(el => <ColorItem color={el}/>)
            }</div>
            <Button variant={'secondary'}>
                <Typography as={'span'} variant={'secondaryButton'}>
                    Подробнее
                </Typography>
            </Button>

        </div>
        <div className={`${styles.section} ${styles.section3}`}>
           <div>
            <div>
                <Typography as={'span'} variant={'h2'}>
                    {price} ₽
                </Typography>
                </div>
            <Button variant={'primary'}>
                <Typography as={'span'} variant={'primaryButton'}>
                    В корзину</Typography>
            </Button>
           </div>
        </div>

    </div>)
}


