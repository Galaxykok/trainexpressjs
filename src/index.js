const express = require('express');
const app = express();

const router = require('./routers/router.js');
app.use('/router', router);

app.listen(3000, ()=>{
    let data = new Date();
    console.log("Servidor iniciado em " + data);
});