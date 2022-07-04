import React from 'react'
import { Routes, Route } from 'react-router-dom';

import AddData from '../components/AddData';
import EditData from '../components/EditData';
import Home from '../components/Home';
const RoutesComponent = () => {
  return (
   <>
   <Routes>
   < Route path='/' element={< Home /> } / >
   <Route path='/adddata' element={ < AddData / > } exact / >
   <Route path='/editdata' element={ < EditData / > } exact / >
   </Routes>
   </>
  )
}

export default RoutesComponent