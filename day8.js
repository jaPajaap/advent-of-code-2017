const input = require('./day8-input')
const max = require('lodash/fp/max')

const vars = []

const instructionMap = {
    inc: '+',
    dec: '-'
}

const lines = input.split('\n')
    .map(l => l.split(' '))
    .map(l => ({
        var: l[0],
        instruction: `${instructionMap[l[1]]} ${l[2]}`,
        condition: `if(${l.slice(-3).join(' ')})`
    }))

for (let l of lines) { eval(`${l.var} = 0` ) }
for (let l of lines) {
    eval(`${l.condition} ${l.var} = ${l.var} ${l.instruction}`)
    eval(`vars.push(${l.var})`)
}
const o = max(vars)


console.log(o)