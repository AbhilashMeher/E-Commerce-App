import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import FilterData from './pages/FilterData';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [order, setOrder] = useState(null);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
          <Route path="/order-confirmation" element={<Order order={order} />} />
          <Route path="/filter-data" element={<FilterData />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;