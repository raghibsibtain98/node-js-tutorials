const http = require('http')

const server = http.createServer((req,res)=>{ //req is what the user will requesst from you, res is what you will give to user
    if(req.url === '/'){ //res.write('')+res.end() = res.end('')
        res.end('Welcome to my first server bro')
    }
    else if(req.url === '/about'){
        res.end('Why do you wanna know about me??')
    }
    else{
       res.end(`<h1>Sorry Pal</h1>
       <p1>out of luck!!</p1>
       <a href="/">Google it!!</a>`)
    }
   
})

server.listen(8080)