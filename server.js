// Importar pacotes para a aplicação
const express = require('express');
const cors = require('cors');
// Definir a porta do express e instanciar o express
const porta = 3000;
const app = express();
// Habilitar o cors e utilização de JSON
app.use(cors());
app.use(express.json())
// Testar API
app.listen(porta, () => console.log(`Rodando na porta ${porta}`));
// Importar a conexão com o banco
const connection = require('./db_config');

// Rotas //

// usuários //

app.post('/usuarios/cadastrar', (request, response) => {
    let params = Array(
        request.body.nome,
        request.body.email,
        request.body.senha 
    );
    let query = "INSERT INTO usuarios(nome, email, senha) VALUES (?,?,?)";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });

});

app.get('/usuario/listar', (request, response) => {
    let query = "SELECT * FROM usuarios";
    connection.query(query, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
});

app.delete('/usuario/deletar/:id', (request, response) => {
    let params = Array(
        request.params.id
    )
    let query = "DELETE FROM usuarios WHERE id = (?)";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
})

app.put('/usuario/editar/:id', (request, response) => {
    let params= Array(
        request.body.nome,
        request.body.email,
        request.body.senha,
        request.params.id
    )

    let query = "UPDATE usuarios SET  nome = (?), email = (?), senha = (?) WHERE id = (?)"
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
})

// produtos //

app.post('/produto/cadastrar', (request, response) => {
    let params = Array(
        request.body.nome,
        request.body.quantidade,
        request.body.preco
    );
    let query = "INSERT INTO produtos(nome, quantidade, preco) VALUES (?, ?, ?);";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });

});


app.delete('/produto/deletar/:id', (request, response) => {
    let params = Array(
        request.params.id
    )
    let query = "DELETE FROM produtos WHERE id = (?)";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
})

app.put('/produto/editar/:id', (request, response) => {
    let params= Array(
        request.body.nome,
        request.body.quantidade,
        request.body.preco,
        request.params.id
    )

    let query = "UPDATE produtos SET  nome = (?), quantidade = (?), preco = (?) WHERE id = (?)"
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
})

app.get('/produto/listar', (request, response) => {
    let query = "SELECT * FROM produtos";
    connection.query(query, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
});

// favoritos // 

