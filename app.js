const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;



app.use(express.static('public'));


app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})