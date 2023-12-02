import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./app/App.tsx";
import "./index.css";
import './styles/index.scss'
import {Products} from "./pages/products/products.tsx";
import {ProductDetails} from "./pages/product-details/product-details.tsx";
import {observer} from "mobx-react";


const RootComponent = observer(() => {

    const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [{
            path: '/products',
            element: <Products/>,
        },
            {
                path: '/product/:productId',
                element: <ProductDetails/>
            }]
    },
])




    return (
        // <React.StrictMode>
            <RouterProvider router={router}/>
         // </React.StrictMode>
    );
});

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<RootComponent />);


