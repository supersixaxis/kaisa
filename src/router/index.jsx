import React from 'react'
import Header from '../components/Header'
import Error from '../components/error'
import Home from '../pages/Home'
import APropos from '../pages/A-propos';
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom';
import Logement from '../pages/Logements';

export const RouteURl = [
  {
     path: "/",
     element: <Layout/>,
     children: [
      {
        index: true,
        element: <Home />,

      },
      {
        path:"A-propos",
        element: <APropos />,
      },
      {
        path:"Logement/:id",
        element: <Logement/>

      },
      {
        path:"*",
        element: <Error />,
      },
     ]
 

}
]




function Layout() {
  return (
    <>
    <Header />
    <main className=''>
    <Outlet />
    </main>
    <Footer />
    </>
  )
}