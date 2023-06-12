const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/dados',(req,res) => {
    const dados= req.dados
    console.log(dados);
    res.send(dados);
});

app.listen(3000, () => {
    console.log('SERVIDOR INICIADO NA PORTA 3000');
})

