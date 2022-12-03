const fs=require('fs');
const http=require('http');

const port=process.env.PORT || 3000

const server=http.createServer((req,res)=>{
   
    res.setHeader('Content-type','text/html');
    console.log(req.url);

    if(req.url=='/'){
        res.statusCode=200;
        const data=fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1> This is Sumit Kandwal</h1> <p> Hey This is a About Page!</p>');
    }
    // serving index.html file on /hello url-->static file server using node js
    else if(req.url=='/sk'){
        res.statusCode=200;
        res.end('<h1> This is Sumit Kandwal</h1> <p> Hey This is a Home Page!</p>');
    }

    else{
        // res.sumit(); 
        res.statusCode=404;
        res.end('<h1> Not Found </h1> <p> This page is not found on this server</p>');
    }
})

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});

