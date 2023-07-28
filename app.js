const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;


app.use(express.static('public'));


const viewsPath = path.join(__dirname, 'views');


app.get('/', (req, res) => {
  res.sendFile(path.join(viewsPath, 'home.html'));
});


const routes = ['createAccount', 'login' ];

routes.forEach(route => {
  app.get(`/${route}`, (req, res) => {
    res.sendFile(path.join(viewsPath, `${route}.html`));
  });
});


app.get('/*', (req, res) => {
  res.sendFile(path.join(viewsPath, '404.html'));
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
