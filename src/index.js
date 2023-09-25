import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Admin from './admin/Admin';
import ProductList from './scenes/productlist/ProductList';
import ProductDetail from './scenes/productDetail/ProductDetail';
import Home from './scenes/home/Home';
import Checkout from './scenes/checkout/Checkout';
import Confirmation from './scenes/checkout/Confirmation';
import CartMenu from './scenes/global/CartMenu';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'product',
        element: <ProductList />
      },
      {
        path: 'product/page/:pageNum',
        element: <ProductList />
      },
      {
        path: 'product/:id',
        element: <ProductDetail />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'checkout/success',
        element: <Confirmation />
      },
      {
        path: 'cart',
        element: <CartMenu />
      }
    ]
  },
  {
    path: '/admin',
    element: <Admin />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={AppRouter}>
    </RouterProvider>
  </React.StrictMode>
);
