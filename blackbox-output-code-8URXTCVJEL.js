// client/src/components/ProductCard.js
import React from 'react';
import { Star, Shield } from 'lucide-react';  // Lucide-react icons
import calculateFinalPrice from '../utils/priceUtils';  // Import price utility

const ProductCard = ({ product }) => {
  const finalPrice = calculateFinalPrice(product.price, product.discountPercentage);

  return (
    <div className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      {/* Product Image with Zoom Effect */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"  // Zoom on hover
        />
        {product.assured && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs flex items-center">
            <Shield size={12} className="mr-1" /> Assured
          </div>
        )}
      </div>
      
      {/* Product Details */}
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <div className="flex items-center mt-1">
        <Star size={16} className="text-yellow-500" />
        <span className="ml-1 text-sm">{product.ratings} ({product.reviews.length} reviews)</span>
      </div>
      <p className="text-xl font-bold text-blue-600 mt-2">{finalPrice}</p>  {/* Calculated price */}
      <button className="w-full bg-orange-500 text-white py-2 mt-2 rounded hover:bg-orange-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;