const express = require('express');
const app = express();

const router = require('./routers/controller.js');
app.use('/router', router);

app.listen(8800, ()=>{
    let data = new Date();
    console.log("Servidor iniciado em " + data);
});