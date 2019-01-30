const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes')

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes.set(app);
app.listen(port, () => {
    console.log(`Ouvindo na porta http://locahost:${port}`);
    console.log(`
    
            Lista de pessoas => http://localhost:${port}/api/lista
            Mamãe empresta 5 pilão => http://localhost:${port}/api/empresta-cinco-pilao
    `);
            
});