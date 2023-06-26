import React from 'react';

const cartItems = [
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

const ShoppingCart = () => {
  // const [cartItems, setCartItems] = useState([]);

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
    <div className='mb-3'>
      <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center mt-4">
            <div className="flex items-center justify-between w-full bg-white rounded-lg p-4 shadow-md">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.price} Rwf</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <button
                className="text-white text-sm bg-red-500 px-4 py-2 rounded-full"
                // onClick={() =>
                //   setCartItems(cartItems.filter((i) => i.id !== item.id))
                // }
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
  );
};

export default ShoppingCart;
