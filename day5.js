const input = require('./day5-input.js')
let jumpOffsets = input.split('\n').map(v => parseInt(v, 10))
let steps = 1
let index = 0


while (index >= 0 && index < jumpOffsets.length) {
    // console.log(jumpOffsets)
    const number = jumpOffsets[index]
    jumpOffsets[index] += number >= 3 ? -1 : 1
    if (number !== 0) {
        index = index + number;
    }
    steps++
}

console.log(steps - 1)