const corsMiddleware = require('../middlewares/cors');

function set(app) {
    app.use(corsMiddleware);
    app.use('/api/lista', (req, res, next) => {
        res.status(200).send([
            { nome: 'João das Pedras', idade: 23 },
            { nome: 'Manoel Silva', idade: 35 },
            { nome: 'Carla Gomes', idade: 22 },
            { nome: 'Brenda Eich', idade: 19 },
            { nome: 'Stevis Jobs', idade: 30 },
            { nome: 'Isabel Uébi', idade: 24 }
        ]);
    });

    app.use('/api/empresta-cinco-pilao', (req, res, next) => {
        const number = Math.floor(Math.random() * 10) + 1;

        if (number % 2 === 0) {
            res.status(200).send('Emprestou 5 pilão');
        }
        else {
            res.status(500).send('Não emprestou 5 pilão');
        }
    });
}

module.exports = { set } ;
