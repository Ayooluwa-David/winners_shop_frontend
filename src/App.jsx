import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainLayout from './layout/MainLayout'
import HomePage from "./components/home/HomePage.jsx"
import NotFoundPage from './components/ui/NotFoundPage.jsx'

const App = () => {
  return (
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                  <Route index element={<HomePage/>}></Route>
                  <Route path="*" element={<NotFoundPage/>}></Route>
                </Route>
            </Routes>
       </BrowserRouter>
  )
}

export default App
