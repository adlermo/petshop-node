const http = require('http')

const petshop = require('./components/petshop')

const server = http.createServer((req, res) => {
    if(req.url === "/list" || req.url === "/listar"){
        return res.end(petshop.listPets())
    }

    if(req.url === "/add" || req.url === "/adicionar"){
        return res.end()
    }
    
    res.setHeader("Content-Type", "text/html;charset=utf8")
    res.write(`Você está no Sistema Petshop!`)
    res.end()
})

server.listen(3001, "localhost", () => console.log("Voce está dentro do servidor!"))