import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ListView from './views/ListView'
import AddView from './views/AddView'
import EditView from './views/EditView'
import RegisterView from './views/RegisterView'
import LoginView from './views/LoginView'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListView />} />
          <Route path="/Addproduit" element={<AddView />} />
          <Route path="/Editproduit/:id" element={<EditView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/Login" element={<LoginView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
