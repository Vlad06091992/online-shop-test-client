import styles from "../../pages/product-details/product-details.module.scss";
import {Typography} from "../../components/ui/typography";
import {ColorItem} from "../../components/color-item/color-item.tsx";
import {Button} from "../../components/ui/button/button.tsx";
import {getPriceToViewModel} from "../../utils/getPriceToViewModel.ts";
import {splitDescription} from "../../utils/splitDescription.ts";
import ChevronLeft from "../../assets/icons/chevron-left.tsx";
import {Link, useParams} from "react-router-dom";
import {observer} from "mobx-react";
import {store} from "../../store/store.ts";
import {useEffect} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const ProductDetails = observer(() => {
    const {productId} = useParams()

debugger

    useEffect(() => {
        debugger
        store.getProductById(+productId!)
    }, [productId])

    const product = store.currentProduct!

    if (!product) {
        return <div>loading...</div>
    }

    const productsInBasket = store.productsInBasket
    const isInBasket = productsInBasket.some(el=>el.id === product.id)
    const notify = (name: string) => toast(`${name} ${isInBasket ? "удален из корзины" : "добавлен в корзину" !}`);



    const {part1, part2} = splitDescription(product.desc)

    return (
        <div className={styles.container}>
            <ToastContainer autoClose={1500} position="top-center" theme={'colored'} />
            <Button onClick={() => {
            }} className={styles.returnButton} variant={'tertiary'}>
                <Typography as={Link} to={'../products'} variant={'tertiaryButton'}>
                    <div className={styles.downButton}><ChevronLeft/> Назад</div>
                </Typography>
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

                    <Button onClick={() => {
                        notify(product.name)
                        isInBasket ? store.deleteProductInBasket(product) :  store.addProductInBasket(product)
                    }} variant={'primary'}>
                        <Typography as={'div'} variant={'primaryButton'}>
                            {isInBasket ? "Удалить " : "В корзину"}</Typography>
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

})