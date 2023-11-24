import {ProductType} from "../../types.ts";
import styles from "./product-details.module.scss";
import {Typography} from "../../components/ui/typography";
import {ColorItem} from "../../components/color-item/color-item.tsx";
import {Button} from "../../components/ui/button/button.tsx";
import {getPriceToViewModel} from "../../utils/getPriceToViewModel.ts";
import {splitDescription} from "../../utils/splitDescription.ts";
import ChevronLeft from "../../assets/icons/chevron-left.tsx";
import {Link, useParams} from "react-router-dom";
import {cardData} from "../../products-db.ts";
type Props = ProductType


export const ProductDetails = ({colors, desc, id, name, popularity, image, price}: Props) => {
    const {productId} = useParams()
    const product = cardData.find(el=>el.id == productId)!
    console.log(productId)
    const {part1, part2} = splitDescription(product.desc)

    return (
        <div className={styles.container}>
            <Button onClick={() => {
                console.log('назад')
            }} className={styles.returnButton} variant={'tertiary'}>
                <ChevronLeft/>
                <Typography as={Link} to={'../products'} variant={'tertiaryButton'}>Назад</Typography>
            </Button>
            <div className={styles.root}>
                <div className={styles.image}>
                    <img alt={product.name} src={product.image}/>
                </div>
                <div className={styles.info}>
                    <div className={styles.productInfo}>
                        <div>
                            <Typography as={'h2'} variant={'h2'}>{product.name}</Typography>
                            <div className={styles.colors}>{
                                product.colors.map(el => <ColorItem key={el} color={el}/>)
                            }</div>
                        </div>
                        <div className={styles.basket_price}>
                            <Typography className={styles.price} as={'div'} variant={'h2'}>
                                {getPriceToViewModel(product.price)} ₽
                            </Typography>

                            <Button variant={'primary'}>
                                <Typography as={'div'} variant={'primaryButton'}>
                                    В корзину</Typography>
                            </Button>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <Typography className={styles.header} as={'h2'} variant={'h2'}>
                            Описание
                        </Typography>
                        <Typography as={'p'} variant={'textDescription'}>
                            {part1}
                        </Typography>
                        <br/>
                        <Typography as={'p'} variant={'textDescription'}>
                            {part2}
                        </Typography>

                    </div>
                </div>
            </div>
        </div>
    )
}