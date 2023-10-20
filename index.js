const http = require("http");

const PORT = 3000


const server = http.createServer();

const friends = [
    {id: 0, name: "Mini"},
    {id: 1, name: "Mani"},
    {id: 2, name: 'Mo'}
]
    server.on('request', (req, res) =>{
        const items = req.url.split('/');
        if(req.method === "GET"){
    if(req.url === "/friends"){
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({id: 1, name: "Isac Newton"}));   
    }
    else if(req.url === "/messages"){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li> Hi Isaac</li>');
        res.write('</ul>');
        res.write('<body>');
        res.write('</html>');
        res.end();
    }else{
        res.statusCode = 404;
        res.end();
    }
}
else if(req.method === "POST"){
    req.on("data", (data) => {
        let friend = data.toString()
        console.log(`Request: ${friend}`)
        friends.push(JSON.parse(friend));
    })
}
});

server.listen(PORT, console.log(`Listening on port ${PORT}`));
