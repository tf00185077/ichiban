import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '@/components/header/Header.jsx'
import {
  RouterProvider
} from "react-router-dom";
import router from "./routes/index.tsx"
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
