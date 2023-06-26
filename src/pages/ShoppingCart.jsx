import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {API_URL,config} from '../utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar'

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Orange',
      type: 'Type A',
      price: 100,
      date: '2023-06-25',
      quantity: 2,
    }
  ]);

  useEffect(() => {
    // Call API to get items in the shopping cart
    axios.get(`http://localhost:5000/cart`, config)
      .then((response) => {
        console.log(response,"resss")
        setCartItems(response.data);
      })
      .catch((error) => {
        console.log('catch err', error);
      });
  }, []);

  // Function to handle checkout and display the purchased table
  const checkout = () => {
    axios
      .post(`http://localhost:5000/cart/checkout`, config)
      .then((response) => {
        console.log(response.data, 'response');
        toast.success('Items checked out successfully!');
      })
      .catch((error) => {
        toast.error('Failed to check out items.');
        console.log('catch errr', error);
      });
  };

  // Function to handle removing an item from the cart
  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((i) => i.id !== item.id);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <Navbar/>
      <ToastContainer />
      <div className='mt-12'>
      <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center mt-4 shadow-md">
            <div className="flex items-center justify-between w-full bg-white rounded-lg p-4">
              <div>
                <h3 className="text-md font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.price} Rwf</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <button
                className="text-white text-sm bg-red-500 px-4 py-2 rounded-full"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <button
          className="bg-[#092468] text-white text-sm px-4 py-2 rounded-full mt-4"
          onClick={checkout}
        >
          Checkout
        </button>
      )}
      </div>
    </div>
  );
};

export default ShoppingCart;
