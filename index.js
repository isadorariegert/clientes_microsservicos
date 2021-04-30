const express = require('express');
const app = express();
app.use(express.json());
const axios = require("axios");
clientes = {};
contador = 0;

app.get('/clientes', (req, res) => {
    res.send(clientes)
});
app.put('/clientes', (req, res) => {
    contador++
    const { nome, endereco, idade } = req.body;
    clientes[contador] = {
        contador,
        nome,
        endereco,
        idade
    }
    res.status(201).send(clientes[contador]);
});
app.listen(4000, () => {
    console.log('Porta 4000: clientes');
});