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
import Dashboard from './admin/scenes/Product/DashBoard';
import AdminProduct from './admin/scenes/Product/AdminProduct';
import AdminProductBox from './admin/scenes/Product/ProductBox';
import AdminProductDetail from './admin/scenes/Product/ProductDetail';
import AdminProductAdd from './admin/scenes/Product/ProductAdd';
import AdminProductEdit from './admin/scenes/Product/ProductEdit';

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
    element: <Admin />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "/admin/product",
        element: <AdminProduct />,
        children: [
          {
            index: true,
            element: <AdminProductBox />
          },
          {
            path: "/admin/product/:id",
            element: <AdminProductDetail />
          },
          {
            path: "/admin/product/add",
            element: <AdminProductAdd />
          },
          {
            path: "/admin/product/edit/:id",
            element: <AdminProductEdit />
          },
          {
            path: "/admin/product/page/:pageNum",
            element: <AdminProductBox />
          }
        ]
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={AppRouter}>
    </RouterProvider>
  </React.StrictMode>
);
