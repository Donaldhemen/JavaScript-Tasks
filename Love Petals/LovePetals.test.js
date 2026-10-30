const {LovePetals} = require('./LovePetals');

describe('LovePetals', () => {
    let lovePetals;

    beforeEach(() => {
        lovePetals = new LovePetals();
    });

    test('that a LovePetals instance is created with an empty petals array', () => {
        expect(lovePetals.petals).toEqual([]);
    });

    test('that isInLove returns true if any petal is odd', () => {
        lovePetals.petals = [2, 4];
        expect(lovePetals.isInLove()).toBe(true);
    });

    test('that isInLove returns false if both petals are even', () => {
        lovePetals.petals = [2, 4];
        expect(lovePetals.isInLove()).toBe(false);
    });

    test('that isInLove returns false if both petals are odd', () => {
        lovePetals.petals = [3, 5];
        expect(lovePetals.isInLove()).toBe(false);
    });

    test('that isInLove returns false if there are not exactly two petals', () => {
        lovePetals.petals = [1];
        expect(lovePetals.isInLove()).toBe(false);
        lovePetals.petals = [1, 2, 3];
        expect(lovePetals.isInLove()).toBe(false);
    });
    
    
})