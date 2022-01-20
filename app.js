/*const amount = 12

if(amount < 10){
    console.log('Small number')
}
else{
    console.log('large number')
}*/

//globals
/*console.log('first NodeJS code') 
console.log(__dirname)
console.log(__filename)
setInterval(()=>{
    console.log("hello")
},500)*/

//modules

const names = require('./names.js') //{ john: 'John', tom: 'tom' }
const util = require('./util.js')

//console.log(names)

util('me')
util(names.john)
util(names.tom)

