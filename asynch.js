/*const {readFileSync, writeFileSync} = require('fs') //to read files synchronously 
console.log('start')
const path1 = readFileSync('./content_example/test1.txt','utf8')
const path2 = readFileSync('./content_example/test2.txt','utf8')
console.log('almost there')
//above two lines will read the files one by one and then wrote them in the file

writeFileSync('./content_example/result_sync.txt',`Result is:\n${path1},${path2}`)
console.log('done')
console.log(path1)
console.log(path2)
//if file in the first arg is not there then it will create one*/

const {readFile, writeFile} = require('fs')

//here the readfile will work on callback
console.log('start');
readFile('./content_example/test1.txt','utf8',(err,data1)=> {
    if(err){
        return
    }
    const res1 = data1

    readFile('./content_example/test2.txt','utf8',(err,data2)=>{
        if(err){
            return
        }
        const res2 = data2
        
        writeFile('./content_example/result-asynch.txt',`Result is : ${res1},${res2}`, (err,data3) =>{
            if(err)
                return
            console.log('almost there')
        })
    })
})
console.log('done');
//you will not that done gets printed before almost there 

