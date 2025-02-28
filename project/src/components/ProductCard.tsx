import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  template?: 'grid' | 'list' | 'compact';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, template = 'grid' }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  if (template === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex">
        <div className="w-1/3 p-4 flex items-center justify-center bg-gray-50">
          <img 
            src={product.image} 
            alt={product.title} 
            className="h-40 object-contain"
          />
        </div>
        <div className="w-2/3 p-4 flex flex-col justify-between">
          <div>
            <Link to={`/product/${product.id}`}>
              <h2 className="text-lg font-semibold text-gray-800 hover:text-indigo-600 mb-2 line-clamp-2">{product.title}</h2>
            </Link>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < Math.round(product.rating.rate) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">({product.rating.count})</span>
            </div>
            <p className="text-gray-500 text-sm capitalize">Category: {product.category}</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
            <button 
              onClick={handleAddToCart}
              className="bg-indigo-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-indigo-700 transition-colors"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (template === 'compact') {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex items-center p-2">
        <div className="w-16 h-16 flex-shrink-0">
          <img 
            src={product.image} 
            alt={product.title} 
            className="h-full w-full object-contain"
          />
        </div>
        <div className="ml-3 flex-grow">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-sm font-medium text-gray-800 hover:text-indigo-600 line-clamp-1">{product.title}</h3>
          </Link>
          <div className="flex items-center justify-between mt-1">
            <span className="text-sm font-semibold text-indigo-600">${product.price.toFixed(2)}</span>
            <button 
              onClick={handleAddToCart}
              className="text-indigo-600 hover:text-indigo-800"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default grid template
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`} className="block">
        <div className="h-48 p-4 flex items-center justify-center bg-gray-50">
          <img 
            src={product.image} 
            alt={product.title} 
            className="h-full object-contain"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-14">{product.title}</h2>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < Math.round(product.rating.rate) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({product.rating.count})</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
            <button 
              onClick={handleAddToCart}
              className="bg-indigo-600 text-white p-2 rounded-full flex items-center hover:bg-indigo-700 transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;