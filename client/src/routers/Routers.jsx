import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CustomerRoutes from './CustomerRoutes'

export default function Routers() {
  return (
    <Routes>
        <Route path='/*' element={<CustomerRoutes/>}/>
    </Routes>
  )
}
