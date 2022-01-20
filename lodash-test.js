const _ = require('lodash') //convention to denote items like this

const items = [1,2,[3,[4,5,[6]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)