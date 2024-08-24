import Item from "../Entities/item.js";
import { describe, it, expect } from 'vitest';

// Agrupa todos os tipos de teste.
describe('Test from class Item.', () =>{

    it('Should be 3 values: name, value and quantity.', () => {
        const item = new Item('Beet', 2.5, 10)

        expect(item.name).toBe('Beet')
        expect(item.value).toBe(2.5)
        expect(item.quantity).toBe(10)
    })

    it('Should be the price exaclty for the quantity', () => {
        const item = new Item('Beet', 2.5, 10)

        expect(item.getTotalValue()).toBe(item.value * item.quantity)
    })
})