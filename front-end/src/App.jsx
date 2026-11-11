import { useState } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductCard from './Pages/ProductCard';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import ProductDetails from './Pages/ProductDetails';
import CompletedProfile from './Pages/CompeletedProfile';
import Support from './Pages/Support';

function ProtectedLayout() {
  const token = useSelector((state) => state.auth.token);
  if (!token) return <Navigate to="/login" replace />;
  return <Outlet />;
}
function App() {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    const found = cart.find((item) => item.id === product.id);
    if (found) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  return (
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
        <Route path="/products/:id" element={<ProductDetails onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/complete-profile" element={<CompletedProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
