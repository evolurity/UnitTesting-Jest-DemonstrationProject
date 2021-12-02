function excpect(value) {
    return {
        toBe: exp => {
            if (value === exp) {
                console.log('Success')
            } else {
                console.error(`Value is ${value}, but expectation is ${exp}`)
            }
        }
    }
}

const sum = (a, b) => a + b

const nativeNull = () => null

module.exports = {sum, nativeNull}

excpect(sum(2, 4)).toBe(6)
