const { search } = require('./index');

describe('method filter works', () => {
    let arr = [1, false, "apple", "car", 4, 56, "shovel", true];
    let array2 = [1, 4, 56];
    it('array "array2" has 3 elements', () => {
        expect(search(arr)).toEqual(array2)
    });
    it('should be defined', () => {
        expect(search(arr)).not.toBeUndefined()
    });
    it('should NOT contain falsy values', () => {
        expect(search(arr)).not.toContain('');
        expect(search(arr)).not.toContain(null);
        expect(search(arr)).not.toContain(0);
        expect(search(arr)).not.toContain(false);
    });
});

const { getNum } = require('./index');

describe('function is valid', () => {
    it('should be false if recieves string', () =>
        expect(getNum('someStr')).toEqual(false));
    it('should be false if recieves even number', () =>
        expect(getNum(4)).toBe(false));
    it('should be fulfilled successfully then odd number recieved', () =>
        expect(getNum(3)).toBe(4));
});


const { multiply } = require('./index');

describe('multiply function validation', () => {
    it('check correct result', () =>
        expect(multiply(10, 5)).toBe(50));
    it('check wrong result expected', () =>
        expect(multiply(2, 10)).not.toBe(30))
});


const { repWord } = require('./index');

describe('should perform as expected', () => {
    it('should be defined', () => {
        expect(repWord('love', 3)).not.toBeUndefined();
        expect(repWord('love', 3)).not.toBeNull();
    });
    it('should contain particular content', () => {
        let str = "hate1,hate2,"
        expect(repWord('hate', 6)).toContain('hate5');
        expect(repWord('hate', 2)).toEqual(str);
    });
});