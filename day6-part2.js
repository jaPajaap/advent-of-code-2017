const input = require('./day6-input.js')
let arr = input.split('\t').map(x => parseInt(x, 10))

const [_steps, duplicate] = countUntilAnyDuplicate(arr)
const [steps, _duplicate] = countUntilStartingDuplicate(duplicate)

console.log(steps, _duplicate)

function countUntilAnyDuplicate (arr) {
    const arrs = []
    let lastArrString = ''
    let steps = 0
    while (!arrs.includes(lastArrString, 1)) {
        const max = findMax(arr)
        const index = arr.indexOf(max)
        arr[index] = 0
        distribute(arr, index + 1, max)
        lastArrString = arr.join(',')
        arrs.unshift(lastArrString)
        steps++
    }
    return [steps, arrs[0].split(',').map(x=> parseInt(x, 10))]
}

function countUntilStartingDuplicate (arr) {
    const arrs = []
    let lastArrString = ''
    const start = arr.join(',')
    let steps = 0
    while (!arrs.includes(start)) {
        const max = findMax(arr)
        const index = arr.indexOf(max)
        arr[index] = 0
        distribute(arr, index + 1, max)
        lastArrString = arr.join(',')
        arrs.unshift(lastArrString)
        steps++
    }
    return [steps, arrs[0].split(',').map(x=> parseInt(x, 10))]
}

function findMax(arr) {
    return arr.reduce(function(a, b) {
        return Math.max(a, b);
    });
}

function distribute(arr, index, val) {
    for (let i = 0; i < val; i++) {
        arr[(index + i) % arr.length] += 1
    }
}

// find max
// empty max val
// distribute that val
// store array
// check doubles
// find max