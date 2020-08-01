import React, { useState } from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import PurchasePage from './components/PurchasePage';

const App = () => {
  const [cart, setCart] = useState([]);

  // Method to add items to cart
  const addToCart = item => {
    // Checking if the item is already present in cart.
    const isAlreadyInCart = cart.findIndex(function (itemInCart) {
      return itemInCart.id === item.id;
    })

    // Show a toast component to specify item already is in cart
    if (isAlreadyInCart !== -1) {
      return toast("Item is already present in cart!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "error"
      })
    }

    // Add item to cart
    setCart([...cart, item]);
  }

  // Method to buy item
  const buyItem = () => {
    setCart([])
    toast("Item purchase successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: "success"
    })
  }

  // Method to remove item form cart
  const removeItem = item => {
    setCart(cart.filter(itemInCart => { 
      return itemInCart.id !== item.id
    }));
  }


  return (
    <div className="App">
      <PurchasePage addToCart={addToCart} />
    </div>
  );
}

export default App;
