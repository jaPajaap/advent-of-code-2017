const flow = require('lodash/fp/flow')
const map = require('lodash/fp/map')
const filter = require('lodash/fp/filter')
const forEach = require('lodash/fp/forEach')
const input = require('./day7-input.js')
const regWeight = /\((.*)\)/
const regParents = /\> (.*)/

const o = flow(
    i => i.split('\n'),
    map(l => {
        const regParentsRes = regParents.exec(l)
        return {
            name: l.slice(0, l.indexOf(' ')),
            weight: regWeight.exec(l)[1],
            children: regParentsRes ? regParentsRes[1].split(', ') : []
        }
    }),
    filter(d => d.children.length > 0),
    discsWithChildren => {
        let currentDisc
        for (const disc of discsWithChildren) {
            let match
            currentDisc = disc.name
            for (const d of discsWithChildren) {
                if (d.children.includes(currentDisc)) {
                    match = true
                    break
                }
            }
            if (!match) break
        }
        return currentDisc
    }
)(input)

console.log(o)

// voor elke disc met children
// check of naam in andere children voorkom
// zoja: niet het resultaat
// zonee: jeuj!