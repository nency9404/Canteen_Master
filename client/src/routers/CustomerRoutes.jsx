import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Canteen from '../pages/Canteen/Canteen';

export default function CustomerRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/canteen/:name/:id' element={<Canteen/>}/>
    </Routes>
  )
}
