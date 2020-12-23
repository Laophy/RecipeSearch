const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 8080

app.use(bodyParser.json())

app.get("/api/pokemon/:id", (req, res) => {
    const pokeID = req.params.id
    res.send({url: 'https://pokeapi.glitch.me/v1/pokemon/' + pokeID})
})

app.post("/api", (req, res) => {
    let id = req.body.id
    res.send({id})
})

app.listen(port, () => {
    console.log("Server started on port: " + port);
})