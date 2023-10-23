import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contact from './components/Contact/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [

      {
        path:"/",
        element: <Home></Home>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:"/About",
        element: <About></About>
      },
      {
        path:"/Skills",
        element: <Skills></Skills>
      },
      {
        path:"/Portfolio",
        element: <Portfolio></Portfolio>
      },
      {
        path:"/Contact",
        element: <Contact></Contact>
      }


    ]
    
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)