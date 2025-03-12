//Question 3.a
function addProductToCart(cart, productName, quantity, price) {
  const product = cart.find(item => item.name === productName);
  if (product) {
    return cart.map(item => item.name === productName ? { ...item, quantity: item.quantity + quantity } : item);
  } else {
    return [...cart, { name: productName, quantity, price }];
  }
}
let cart = [
  { name: "Laptop", quantity: 1, price: 1000 },
  { name: "Mouse", quantity: 2, price: 50 }
];
cart = addProductToCart(cart, "Laptop", 1, 50);
cart = addProductToCart(cart, "Mouse", 1, 50);
console.log(cart);

//Question 3.b
function removeProductFromCart(cart, productName) {
  return cart.some(item => item.name === productName) ? cart.filter(item => item.name !== productName) : "Product not found";
}
console.log(removeProductFromCart(cart, "Mouse"));


//Question 3.c
function getCartTotal(cart) {
  return cart.reduce((total, item) => total + item.quantity * item.price, 0);
}
console.log(getCartTotal(cart));


//Question 3.d
function applyCoupon(cart, couponPercentage) {
  return getCartTotal(cart) * (1 - couponPercentage / 100);
}
console.log(applyCoupon(cart, 10));


//Question 3.e:
// Use vectors (data structure) so that you can update, delete,... dynamically