import {Header} from "../components/header/Header.tsx";
import {Sidebar} from "../components/sidebar/sidebar.tsx";
import styles from './App.module.scss'

function App() {
  return <div>
    <Header/>
    <div className={styles.main}>
      <Sidebar/>

    </div>
  </div>;
}

export default App;
