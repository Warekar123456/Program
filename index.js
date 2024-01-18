// Function to calculate the total amount for a product
function calculateProductTotal(quantity, price) {
    return quantity * price;
}

// Function to calculate the subtotal for all products
function calculateSubtotal(products) {
    return products.reduce((subtotal, product) => subtotal + product.total, 0);
}

// Function to calculate the total cost with discounts and fees
function calculateTotal(subtotal, discountAmount, shippingFee, giftWrapFee) {
    return subtotal - discountAmount + shippingFee + giftWrapFee;
}

// Function to display the details
function displayDetails(products, subtotal, discountName, discountAmount, shippingFee, giftWrapFee, total) {
    console.log("Product Details:");
    products.forEach((product) => {
        console.log(`${product.name} - Quantity: ${product.quantity}, Total: ${product.total}`);
    });

    console.log(`\nSubtotal: ${subtotal}`);
    console.log(`Discount Applied: ${discountName} - Amount: ${discountAmount}`);
    console.log(`Shipping Fee: ${shippingFee}`);
    console.log(`Gift Wrap Fee: ${giftWrapFee}`);
    console.log(`\nTotal: ${total}`);
}

// Example usage
const products = [
    { name: "Product1", quantity: 2, price: 10, giftWrap: false },
    { name: "Product2", quantity: 1, price: 20, giftWrap: true },
];

const discountName = "10% Off";
const discountAmount = 5;
const shippingFee = 3;
const giftWrapFee = 2;

// Calculate total for each product
products.forEach((product) => {
    product.total = calculateProductTotal(product.quantity, product.price);
    if (product.giftWrap) {
        product.total += giftWrapFee;
    }
});

// Calculate subtotal
const subtotal = calculateSubtotal(products);

// Calculate total
const total = calculateTotal(subtotal, discountAmount, shippingFee, giftWrapFee);

// Display details
displayDetails(products, subtotal, discountName, discountAmount, shippingFee, giftWrapFee, total);
