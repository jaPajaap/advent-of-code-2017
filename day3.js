const grid = [[1]]
const pos = [0,0]

const order = ['r', 'u', 'l', 'd'];

walk(10)

const walk = n => for (let i = 0; i < n; i++) {
    move(order[n % 4])
}


const move = (direction) => {
    switch (direction) {
        case 'r':
            pos = [pos[0] + 1, pos[0]]
            grid[pos[1]][pos[0] + 1] = 1
            break;

        case 'u':
            pos = [pos[0], pos[0] + 1]
            grid[pos[1] + 1][pos[0]] = 1
            break;

        case 'l':
            pos = [pos[0], pos[0] - 1]
            grid[pos[1]][pos[0] -1] = 1
            break;

        case 'd':
            pos = [pos[0] - 1, pos[0]]
            grid[pos[1] -1][pos[0]] = 1
            break;
    
        default:
            break;
    }
}