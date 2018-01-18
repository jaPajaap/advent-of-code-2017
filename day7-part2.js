const flow = require('lodash/fp/flow')
const map = require('lodash/fp/map')
const filter = require('lodash/fp/filter')
const reduce = require('lodash/fp/reduce')
const forEach = require('lodash/fp/forEach')
const indexOf = require('lodash/fp/indexOf')
const sortBy = require('lodash/fp/sortBy')
const slice = require('lodash/fp/slice')
const head = require('lodash/fp/head')
const last = require('lodash/fp/last')
const input = require('./day7-input.js')
const regWeight = /\((.*)\)/
const regParents = /\> (.*)/

const o = flow(
    makeDiscs,
    discs => filter(d => d.name !== findUpper(discs))(discs),
    correctWeight
)(input)

function makeDiscs (input) {
    return input.split('\n').map(l => {
        const regParentsRes = regParents.exec(l)
        return {
            name: l.slice(0, l.indexOf(' ')),
            weight: parseInt(regWeight.exec(l)[1], 10),
            children: regParentsRes ? regParentsRes[1].split(', ') : []
        }
    })       
}

function findUpper (discs) {
    return flow(
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
    )(discs)
}

function correctWeight (discs) {
    return flow(
        reduce((acc, { name, weight, children }) => {
            if (children.length === 0) return acc
            const childrenWeight = children.reduce((sum, cName) => {
                return sum + discs.find(d => d.name === cName).weight
            }, 0)
            return [...acc, {
                name,
                weight,
                childrenWeight,
                totalWeight: weight + childrenWeight
            }]
        }, []),
        discs => flow(
            sortBy('totalWeight'),
            sorted => {
                const low = sorted[0]
                const high = last(sorted)
                const mid = sorted[1]
                console.log(low,mid,high)
                const unique = low.totalWeight === mid.totalWeight ? high : low
                return unique.weight + (mid.totalWeight - unique.totalWeight)
            }
        )(discs)


    )(discs)
}

console.log(o)

// voor elke disc met children, behalve de opper parent: day7
// maak som van zelf + alle children
// vind welke niet klopt
// reken verschil uit en geef nieuwe gewicht van disc met children