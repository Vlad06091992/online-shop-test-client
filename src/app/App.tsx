import {Outlet} from "react-router-dom";
import {Header} from "../components/header/Header.tsx";
import {observer} from "mobx-react";


export const App = observer(() => {
    return (<div>
        <Header/>
        <Outlet/>
    </div>);
})

export default App;
