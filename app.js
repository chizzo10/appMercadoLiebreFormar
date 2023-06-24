const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;



app.use(express.static('public'));

const viewsPath = path.join(__dirname, 'views');

app.get('/',(req, res) =>{
    res.sendFile(path.join(viewsPath, 'home.html'))
});


app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})