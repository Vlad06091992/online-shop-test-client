import {ProductType} from "../../types.ts";
import styles from "./product-details.module.scss";
import {Typography} from "../../components/ui/typography";
import {ColorItem} from "../../components/color-item/color-item.tsx";
import {Button} from "../../components/ui/button/button.tsx";
import {getPriceToViewModel} from "../../utils/getPriceToViewModel.ts";
import {splitDescription} from "../..//utils/splitDescription.ts";

type Props = ProductType


export const ProductDetails = ({colors, desc, id, name, popularity, image, price}: Props) => {

    const {part1,part2} = splitDescription(desc)

    return (<div className={styles.root}>
        <div className={styles.image}>
            <img alt={name} src={image}/>
        </div>
        <div className={styles.info}>
            <div className={styles.productInfo}>
                <div>
                    <Typography as={'h2'} variant={'h2'}>{name}</Typography>
                    <div className={styles.colors}>{
                        colors.map(el => <ColorItem color={el}/>)
                    }</div>
                </div>
                <div className={styles.basket_price}>
                    <Typography className={styles.price} as={'div'} variant={'h2'}>
                        {getPriceToViewModel(price)} ₽
                    </Typography>

                    <Button variant={'primary'}>
                        <Typography as={'div'} variant={'primaryButton'}>
                            В корзину</Typography>
                    </Button>
                </div>
            </div>
            <div className={styles.description}>
                <Typography as={'h2'} variant={'h2'}>
                    Описание
                </Typography>
                <div>{part1}</div>
                <br/>
                <div>{part2}</div>

            </div>
        </div>
    </div>)
}