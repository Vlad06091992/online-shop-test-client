import {Header} from "../components/header/Header.tsx";
import {Sidebar} from "../components/sidebar/sidebar.tsx";
import styles from './App.module.scss'
import {Products} from "../components/products/products.tsx";
import {ProductDetails} from "../components/product-details/product-details.tsx";
import {ProductType} from "../types.ts";

const product:ProductType =   {
      id: 1,
      name: "Смартфон POCO C51 64 ГБ",
      price: 6499,
      image:
          "https://c.dns-shop.ru/thumb/st1/fit/500/500/256e8ece17c46e683dbe0facd94c5e69/5c108f7da6e5886d4d32d723d0e24ad0151bd790d7941374c56d9d8e9718d9f6.jpg.webp",
      colors: ["black", "blue", "green"],
      popularity: 3,
      desc: `Смартфон POCO C51 64 ГБ предлагает функции, необходимые для разговоров по мобильной связи, общения в социальных сетях и мультимедийных развлечений. Он выполнен в компактном пластиковом корпусе с обтекаемыми гранями и тыловой панелью голубого цвета. Экран IPS диагональю 6.52 дюйма обеспечивает интуитивное управление и реалистичное изображение.
      Высокая производительность системы достигается благодаря 8-ядерному процессору MediaTek Helio G36 и 2 ГБ оперативной памяти. На тыловой панели установлена сдвоенная камера 8+0.3 Мп с автофокусом и светодиодной вспышкой для реалистичной съемки фотографий и видео. Фронтальная камера 5 Мп позволяет делать селфи и общаться по видеосвязи. Встроенный сканер отпечатков пальцев гарантирует простую и безопасную разблокировку устройства. За автономность смартфона POCO C51 отвечает аккумуляторная батарея емкостью 5000 мА*ч.`,
    }

function App() {
    return <div>
        <Header/>
        <div className={styles.main}>
            {/*<Sidebar/>*/}
            {/*<Products/>*/}
            <ProductDetails {...product}/>
        </div>
    </div>;
}

export default App;
