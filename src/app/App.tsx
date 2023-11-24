import {ProductType} from "../types.ts";
import {Outlet} from "react-router-dom";
import {Header} from "../components/header/Header.tsx";



function App() {
    return (<div>
        <Header/>
        <Outlet/>
    </div>);
}

export default App;
