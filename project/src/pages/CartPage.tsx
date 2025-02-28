import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowLeft, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="flex flex-col items-center">
          <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/products" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200">
                <div className="col-span-6">
                  <h2 className="text-sm font-medium text-gray-900">Product</h2>
                </div>
                <div className="col-span-2 text-center">
                  <h2 className="text-sm font-medium text-gray-900">Price</h2>
                </div>
                <div className="col-span-2 text-center">
                  <h2 className="text-sm font-medium text-gray-900">Quantity</h2>
                </div>
                <div className="col-span-2 text-right">
                  <h2 className="text-sm font-medium text-gray-900">Total</h2>
                </div>
              </div>
              
              {cart.map(item => (
                <div key={item.id} className="p-4 border-b border-gray-200 last:border-b-0">
                  <div className="md:grid md:grid-cols-12 md:gap-4 flex flex-col">
                    {/* Product */}
                    <div className="col-span-6 flex">
                      <div className="w-20 h-20 flex-shrink-0 bg-gray-50 rounded overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      <div className="ml-4 flex flex-col">
                        <Link to={`/product/${item.id}`} className="text-sm font-medium text-gray-900 hover:text-indigo-600">
                          {item.title}
                        </Link>
                        <p className="mt-1 text-xs text-gray-500 capitalize">Category: {item.category}</p>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="mt-auto text-xs text-red-600 hover:text-red-800 flex items-center md:hidden"
                        >
                          <Trash2 className="h-3 w-3 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="col-span-2 flex items-center justify-between md:justify-center mt-4 md:mt-0">
                      <span className="text-sm font-medium md:hidden">Price:</span>
                      <span className="text-sm text-gray-900">${item.price.toFixed(2)}</span>
                    </div>
                    
                    {/* Quantity */}
                    <div className="col-span-2 flex items-center justify-between md:justify-center mt-4 md:mt-0">
                      <span className="text-sm font-medium md:hidden">Quantity:</span>
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-500 hover:text-gray-700 p-1"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-10 text-center border border-gray-300 rounded mx-1 py-1 text-sm"
                        />
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-gray-700 p-1"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Total */}
                    <div className="col-span-2 flex items-center justify-between md:justify-end mt-4 md:mt-0">
                      <span className="text-sm font-medium md:hidden">Total:</span>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="ml-4 text-gray-400 hover:text-red-600 hidden md:block"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Link to="/products" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Subtotal ({totalItems} items)</span>
                  <span className="text-sm font-medium text-gray-900">${totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Shipping</span>
                  <span className="text-sm font-medium text-gray-900">Free</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Tax</span>
                  <span className="text-sm font-medium text-gray-900">${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-base font-medium text-gray-900">Order Total</span>
                  <span className="text-base font-medium text-gray-900">${(totalPrice * 1.1).toFixed(2)}</span>
                </div>
              </div>
              
              <button className="mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Proceed to Checkout
              </button>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>We accept all major credit cards and PayPal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;