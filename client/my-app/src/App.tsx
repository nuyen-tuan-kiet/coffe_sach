import React ,{useState} from 'react';  
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {PDFViewer} from '@react-pdf/renderer'
import Login_admin from './page/login_admin';
import PersistentDrawerLeft from './page/Adminstore';
import {useAppSelector} from "./store/reduxhoock";
import { Protect_element } from './share/type';
import Protected from './component/protected';

import Dashboar from './page/Sale_product';
import Product_page from './page/List_product';
import Product_add from './page/Add_product';
import Order from './page/Order'
import Invoice from './page/Invoice'

function App() {


const uselogin = useAppSelector((state) => state.admin_info.isLogin );


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login_admin />,
    },
    {
      path: "/login_admin",
      element: <Protected isLogin={uselogin}>
                     <PersistentDrawerLeft/>
                </Protected>,
      children:[
        {
          path: "/login_admin/Dashboard",
          element: <Protected isLogin={uselogin}>
                         <Dashboar/>
                    </Protected>,
        },
        {
          path: "/login_admin/Product",
          element: <Protected isLogin={uselogin}>
                       <Product_page/>
                    </Protected>,
        },
        {
          path: "/login_admin/addproduct",
          element: <Protected isLogin={uselogin}>
                         <Product_add/>
                    </Protected>,
        },
        {
          path: "/login_admin/catagories",
          element: <Protected isLogin={uselogin}>
                          <Order/>
                    </Protected>,
        },
        {
          path: "/login_admin/invoice",
          element: <Protected isLogin={uselogin}>
                        <Invoice/>
                    </Protected>,
        },
      ]
    },
  
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
