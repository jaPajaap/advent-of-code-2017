const input = `{{},{}}`
const reg = /{(.*?)}/
let level = 1
let count = 0
let string = input

while (string) {
    const regged = reg.exec(string)
    if (regged) count += level
    string = regged && regged[1] || undefined
    level++
}

console.log(count)