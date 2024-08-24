import ShoppingCart from "../Entities/shoppingcart.js";
import Item from "../Entities/item.js";
import { describe, it, expect } from 'vitest';

// Agrupa todos os tipos de teste.
describe('Test from class ShoppingCart.', () =>{

    it('Should be empty', () => {
        const cart = new ShoppingCart()
        expect(cart.subtotal).toBeNull
    })

    it('A cart should have at least one item', () => {
        const cart = new ShoppingCart()
        const item = new Item('Apple', 2, 5);
        const item2 = new Item('Banana', 0.5, 1);

        cart.addItem(item);
        cart.addItem(item2);
        
        expect(typeof cart).toBe('object')

        expect(cart.items[0]).toBe(item)
        expect(cart.items[1]).toBe(item2)

        expect(cart.items).toContain(item)
        expect(cart.items).toContain(item2)
    })

    it('A cart should have total', () => {
        const cart = new ShoppingCart()
        expect(cart).toHaveProperty('total')
    })
})