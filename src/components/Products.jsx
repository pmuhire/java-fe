import React, { useState } from 'react';

// Products data (you can fetch this from an API or use static data)
const productsData = [
  {
    id: 1,
    name: 'Orange',
    type: 'Type A',
    price: 100,
    date: '2023-06-25',
    image: '../orange.png',
  },
  {
    id: 2,
    name: 'Apple',
    type: 'Type A',
    price: 300,
    date: '2023-06-25',
    image: '../orange.png',
  },
];

const Products = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding a product to the cart
  const addToCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      // Product already exists in the cart, update the quantity
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // Product doesn't exist in the cart, add it
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to handle checkout and display the purchased table
  const checkout = () => {
    // Calculate total price and prepare data for purchased table
    const purchasedItems = cartItems.map((item) => {
      const totalPrice = item.price * item.quantity;
      return { ...item, totalPrice };
    });

    // Display the purchased table
    console.log('Purchased Items:', purchasedItems);
    // You can further process this data, send it to the backend, etc.
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800">Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {/* Render product cards */}
        {productsData.map((product) => (
          <div key={product.id} className="bg-white rounded-lg p-4 shadow-md">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {product.name}
            </h3>
            <p className="text-gray-600">{product.type}</p>
            <p className="text-gray-600">{product.price} Rwf</p>
            <p className="text-gray-600">{product.date}</p>
            <button
              className="bg-[#092468] text-white text-sm px-4 py-2 rounded-full mt-4"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Shopping Cart */}
      <div className="mt-8 mb-3">
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
                  onClick={() =>
                    setCartItems(cartItems.filter((i) => i.id !== item.id))
                  }
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

export default Products;
