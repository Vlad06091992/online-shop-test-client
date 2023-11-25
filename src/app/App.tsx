import {Outlet, useSearchParams} from "react-router-dom";
import {Header} from "../components/header/Header.tsx";
import {observer} from "mobx-react";
import {useEffect} from "react";
import {store} from "../store/store.ts";


export const App = observer(() => {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.entries())

    useEffect(() => {
        // debugger
        store.getProducts()
    }, [])



    return (<div>
        <Header/>
        <Outlet/>
    </div>);
})

export default App;
