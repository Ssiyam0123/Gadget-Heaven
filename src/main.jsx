import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Pages/Home.jsx';
import AllCards from './components/AllCards.jsx';
import Statistics from './components/Pages/Statistics.jsx';
import DashBoard from './components/Pages/DashBoard.jsx';
import CardDetails from './components/Pages/CardDetails.jsx';
import Cart from './components/Cart.jsx';
import WishList from './components/WishList.jsx';
import ErrorPage from './components/Pages/ErrorPage.jsx';
import NewsPage from './components/Pages/NewsPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../category.json'), 
        children: [
          {
            path: '/', 
            element: <AllCards />,
            loader: () => fetch('../data.json'), 
          },
          {
            path: '/category/:category',
            element: <AllCards />,
            loader: () => fetch('../data.json'), 
          },
        ]
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/cardDetails/:id', 
        element: <CardDetails />,
        loader: () => fetch('../data.json')
      },
      {
        path: '/dashboard',
        element: <DashBoard />,
        loader: ()=> fetch ('../data.json'),
        children:[
          {
            path: '/dashboard',
            element: <Cart></Cart>
          },
          {
            path: '/dashboard/wishlist',
            element: <WishList/>
          }
        ]
      },
      {
        path: '/news',
        element: <NewsPage></NewsPage>,
        loader: () => fetch('../news.json')
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
