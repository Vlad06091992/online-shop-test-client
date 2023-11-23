import {Header} from "../components/header/Header.tsx";
import {Sidebar} from "../components/sidebar/sidebar.tsx";
import styles from './App.module.scss'
import {Products} from "../components/products/products.tsx";

function App() {
  return <div>
    <Header/>
    <div className={styles.main}>
      <Sidebar/>
      <Products/>

    </div>
  </div>;
}

export default App;
