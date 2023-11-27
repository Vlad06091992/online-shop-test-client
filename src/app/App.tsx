import {Outlet, useNavigate} from "react-router-dom";
import {Header} from "../components/header/Header.tsx";
import {observer} from "mobx-react";
import {useEffect} from "react";


export const App = observer(() => {
    const navigate = useNavigate()


    useEffect(() => {
        navigate('./products')
    }, [navigate]);


    return (<div>
        <Header/>
        <Outlet/>
    </div>);
})

export default App;
