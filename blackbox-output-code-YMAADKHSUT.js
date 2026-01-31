const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },  // URL to product image
  price: { type: Number, required: true },  // Original price in INR
  discountPercentage: { type: Number, default: 0 },  // e.g., 15 for 15%
  stockQuantity: { type: Number, required: true },
  ratings: { type: Number, min: 0, max: 5, default: 0 },  // Average rating
  reviews: [{  // Array of review objects
    user: String,
    rating: Number,
    comment: String,
    date: { type: Date, default: Date.now }
  }],
  category: { type: String, required: true },  // e.g., 'Electronics'
  brand: { type: String, required: true },
  assured: { type: Boolean, default: true }  // Flipkart's "Assured" badge
});

module.exports = mongoose.model('Product', productSchema);