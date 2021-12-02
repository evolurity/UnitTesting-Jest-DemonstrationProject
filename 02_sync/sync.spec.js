const Lodash = require('./sync')
let _ = new Lodash()
describe('Lodash: compact', () => {

    let array

    beforeEach(() => {
        array = [false, '', null, undefined, 55, 0]
    })

    afterAll(() => {
        _ = new Lodash()
    })

    test('should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })
    test('should remove falsy values from array', () => {
        expect(_.compact(array)).toEqual([55])
    })
    test('should NOT contain falsy values', () => {
        expect(_.compact(array)).not.toContain(false)
    })
})

describe('Lodash: groupBy', () => {
    test('should be defined', () => {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeUndefined()
    })

    test('should group array items by Math.floor', () => {
        const array = [2.2, 2.4, 3.1, 1.5]
        const result = {
            2: [2.2, 2.4],
            3: [3.1],
            1: [1.5]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })

    test('should group array items by length', () => {
        const array = ['one', 'two', 'three']
        const result = {
            3: ['one', 'two'],
            5: ['three']
        }
        expect(_.groupBy(array, 'length')).toEqual(result)
    })

    test('should not return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })

})
