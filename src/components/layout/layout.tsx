import {Header} from "../header/Header.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (<div>
        <Header/>
        <Outlet/>
    </div>);
}