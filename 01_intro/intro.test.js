const {sum, nativeNull} = require('./intro')

describe('Sum function:', () => {
    test('should return of two values', () => {
        expect(sum(1, 3)).toBe(4)
        expect(sum(1, 3)).toEqual(4)
    })

    test('should return value correctly comparing to other', () => {
        expect(sum(2, 3)).toBeGreaterThan(4)
        expect(sum(2, 2)).toBeGreaterThanOrEqual(4)
        expect(sum(2, 2)).toBeLessThan(10)
        expect(sum(2, 4)).toBeLessThanOrEqual(6)
    })

    test('should sum 2 floats values correctly', () => {
        expect(sum(0.2, 0.5)).toBeCloseTo(0.7)
    })
})

describe('Native null function:', () => {
    test('should return false value null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        expect(nativeNull()).toBeFalsy() // undefined, null, 0, '' => дают false в if()
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()
        expect(nativeNull()).not.toBeUndefined()
    })
})

