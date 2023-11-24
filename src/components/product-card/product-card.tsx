import {ProductType} from "../../../src/types.ts";
import styles from "./product-card.module.scss"
import {Typography} from "../ui/typography";
import {ColorItem} from "../../components/color-item/color-item.tsx";
import {Button} from "../../components/ui/button/button.tsx";
import {getPriceToViewModel} from "../../utils/getPriceToViewModel.ts";
import {Link} from "react-router-dom";


export const ProductCard = ({colors, desc, id, name, popularity, image, price}: ProductType) => {
    return (<div className={styles.root}>
        <div className={styles.image}>
            <img alt={name} src={image}/>
        </div>
        <div className={styles.section}>
            <div className={styles.productsInfo}>
                <div>
            <Typography as={'h2'} variant={'h2'}>{name}</Typography>
            <div className={styles.colors}>{
                colors.map(el => <ColorItem key={el} color={el}/>)
            }</div>
                </div>
                <div>
            <Button variant={'secondary'}>
                <Typography as={Link} to={`../product/${id}`} variant={'secondaryButton'}>
                    Подробнее
                </Typography>
            </Button>
                </div>
            </div>
        </div>
        <div className={styles.section}>
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

    </div>)
}


