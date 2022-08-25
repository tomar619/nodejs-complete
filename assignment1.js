const http = require('http');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Man City</title></head>');
        res.write('<body><h1>Welcome to Manchester City</h1></body>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users'){
        res.write('<html>')
        res.write('<head><title>Man City Stars</title></head>');
        res.write('<body><ul><li>Kevin Debruyne</li><li>Phil Foden</li><li>Erling Haaland</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);            
        });
    
        return req.on('end', (chunk) => {
            const parsedBody = Buffer.concat(body).toString();            
            const username = parsedBody.split('=')[1];
            console.log(username); 
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();       
        });
    }
    // res.write('<html>')
    // res.write('<head><title>Man City</title></head>');
    // res.write('<body><h1>Welcome to Manchester City</h1></body>');
    // res.write('</html>');
    // return res.end();
};

const server = http.createServer(requestHandler);

server.listen(3000);