import {Outlet, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {Header} from "../components/header/Header.tsx";
import {observer} from "mobx-react";
import {useEffect} from "react";
import {store} from "../store/store.ts";


export const App = observer(() => {
    const {search} = useLocation()
    useEffect(() => {
        store.getProducts(search)
    }, [search])

    return (<div>
        <Header/>
        <Outlet/>
    </div>);
})

export default App;
