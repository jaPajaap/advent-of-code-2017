const input = `5 1 9 5
7 5 3
2 4 6 8`


const splitNewLines = s => s.split('\n')
const splitTabs = s => s.split(' ')
const stringToInt = s => parseInt(s, 10)
const reduceToMinAndMax = (acc, cur) => [
    Math.min(cur, acc[0]),
    Math.max(cur, acc[1])
]


const reduceToDifference = (acc, cur) => Math.abs(acc - cur)
const reduceToSum = (acc, cur) => acc + cur

const output = splitNewLines(input)
    .map(r => splitTabs(r))
    .map(r => r
            .map(v => stringToInt(v))
            .reduce(reduceToMinAndMax, [
                Number.POSITIVE_INFINITY,
                Number.NEGATIVE_INFINITY
            ])
            .reduce(reduceToDifference)
    )
    .reduce(reduceToSum)
    
console.log(output)