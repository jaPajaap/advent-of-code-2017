const input = require('./day4-input')

const output = input
    .split('\n')
    .reduce((sum, x) => {
        const arr = x.split(' ')
            .map(word => word.split('').sort().join())
        if (containsDouble(arr)) {
            return sum
        }
        return sum + 1
    }, 0)

console.log(output)

function containsDouble (arr) {
    const uniques = arr.reduce((p, c) => {
        if (!p.includes(c)) p.push(c);
        return p;
    }, [])
    return uniques.length < arr.length
}