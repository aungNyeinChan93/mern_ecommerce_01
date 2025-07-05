import { createBrowserRouter } from 'react-router';
import App from './App';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import OrderPage from './OrderPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import CollectionPage from './pages/CollectionPage';


const router = createBrowserRouter([
    {
        path: '/', Component: App, children: [
            { index: true, Component: HomePage },
            { path: 'tests', Component: TestPage },
            { path: 'about', Component: AboutPage },
            { path: 'contact', Component: ContactPage },
            { path: 'products', Component: ProductPage },
            { path: 'carts', Component: CartPage },
            { path: 'orders', Component: OrderPage },
            { path: 'placeOrders', Component: PlaceOrderPage },
            { path: 'collections', Component: CollectionPage },
        ]
    }
]);

export default router;