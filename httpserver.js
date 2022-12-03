// build http server in node js using http module

const http=require('http');

const port=process.env.PORT || 3000

const server=http.createServer((req,res)=>{

    console.log(req.url);

    res.statusCode=200;
    //server serve what type of content to client in response
    res.setHeader('Content-type','text/html');
    
    res.end('<h1> This is the response to http request </h1> <p> Hey This is a Node js!</p>');


})

//we have to listen server at a port

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});

