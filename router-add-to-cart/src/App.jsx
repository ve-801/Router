import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Cart from './Pages/Cart';
import PageNotFound from './Pages/PageNotFound';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart(prevCart => {
      return prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };
 
  const  clearCart = () => {
     setCart([]);
   };

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<ProductList products={products} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
