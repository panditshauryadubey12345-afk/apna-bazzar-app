// Function to calculate final price
function calculateFinalPrice(originalPrice, discountPercent = 15, gstPercent = 12) {
  const discountAmount = (originalPrice * discountPercent) / 100;
  const priceAfterDiscount = originalPrice - discountAmount;
  const gstAmount = (priceAfterDiscount * gstPercent) / 100;
  const finalPrice = priceAfterDiscount + gstAmount;
  
  // Format in INR (Indian Rupees)
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(finalPrice);
}

// Example usage: console.log(calculateFinalPrice(1000)); // Output: ₹1,080.00
export default calculateFinalPrice;