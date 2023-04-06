const http = require("http");
const PORT = 5001

http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" })
    res.write("your request worked")
    res.end();
})
.listen(PORT, () =>{
    console.log(`server is listening at ${PORT} port`);
})
