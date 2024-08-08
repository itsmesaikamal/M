import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MViewProducts from './MViewProducts';

const MProducts = () => {
  return (
    <Routes>
      <Route path="view" element={<MViewProducts />} />
    </Routes>
  );
};

export default MProducts;
