let grid = [[1]]
let pos = [0,0]

const order = ['r', 'u', 'l', 'd'];

walk(312051)

function walk (input) {
    let value = 1
    let i = 0
    while (value < input) {
        const index = i % 4
        const steps = Math.ceil((i+1) / 2)
        for (let curStep = 0; curStep < steps && value < input; curStep++) {
            pos = move(pos, order[index])
            const [x,y] = pos
            value = calc(pos)
            grid[y] = grid[y] || []
            grid[y][x] = value
            console.log(pos, value)
        }
        i++
    }
}

function calc ([x,y]) {
    let val = 0
    let sum = 0
    for (let _y = 0; _y < 3; _y++) {
        for (let _x = 0; _x < 3; _x++) {
            val = grid[y - 1 +_y] && grid[y - 1 +_y][x - 1 +_x] || 0
            sum = sum + val
        }
    }
    return sum
}

// returns [x,y]
function move (pos = [0,0], direction) {
    const newPos = [...pos]
    switch (direction) {
        case 'r':
            newPos[0] = pos[0] + 1
            break;

        case 'u':
            newPos[1] = pos[1] + 1
            break;

        case 'l':
            newPos[0] = pos[0] - 1
            break;

        case 'd':
            newPos[1] = pos[1] - 1
            break;
    
        default:
            break;
    }
    return newPos
}