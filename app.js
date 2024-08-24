import Item from "./Entities/item.js";
import ShoppingCart from "./Entities/shoppingcart.js";

const cart = new ShoppingCart();

cart.addItem(new Item('Apple', 3.2, 5));
cart.addItem(new Item('Banana', 2, 2));
cart.addItem(new Item('Watermelon', 10, 1));
cart.addItem(new Item('Grape', 5, 6));

cart.addShipping(15);
cart.calculeTotal();

console.log(cart)