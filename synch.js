const {readFileSync, writeFileSync} = require('fs') //to read files synchronously 
console.log('start')
const path1 = readFileSync('./content_example/test1.txt','utf8')
const path2 = readFileSync('./content_example/test2.txt','utf8')
console.log('almost there')
//above two lines will read the files one by one and then wrote them in the file

writeFileSync('./content_example/result_sync.txt',`Result is:\n${path1},${path2}`) //so path2 will be written at the line where the cursor is at path1

console.log('done')
console.log(path1) 
console.log(path2)


