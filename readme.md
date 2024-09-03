Para iniciar, abra o git bash, após isso, de os comandos:
1- npm init -y;
2- npm i express nodemon dotenv mysql2 cors;

Após instalar as instâncias, teste para ver se o banco e a porta estão conectados:
1- npm start;

Rotas dos usuários 

CADASTRAR 
Rota: http://localhost:3000/usuarios/cadastrar
Colocar: POST 
No body, colocar:
{
    "nome": "Clari",
    "email": "clari@gmail.com",
    "senha": "clari08"
}

Rota: http://localhost:3000/usuario/editar/:id
Colocar: PUT
No body, você muda os campos, colocar:
{
  "nome": "tartaruga",
  "email": "panchinhotartaruga@gmail.turt",
  "senha": "raçãoacabarápido"
}

Rota: http://localhost:3000/usuario/listar
Colocar: GET
Após específicar, aperte 'send' para verificar o usuário

Rota: http://localhost:3000/usuario/deletar/:id
Colocar: DELETE
Após específicar, aperte 'send' para excluír o usuário colocado


PRODUTO
Rota: http://localhost:3000/produto/cadastrar
Colocar: POST
No body, colocar:
{
    "nome": "racao",
    "quantidade": "5",
    "preço": "100"
}

Rota: http://localhost:3000/produto/deletar/:id
Colocar: DELETE
Após especificar, aperte 'send' para excluir o produto cadastrado

Rota: http://localhost:3000/produto/editar/:id
Colocar: PUT
No body, você muda os campos, colocar:
{
  "nome": "sorvete",
  "quantidade": "7",
  "preco": "20"
}

Rota: http://localhost:3000/produto/listar
Colocar: GET
Após específicar, aperte 'send' para verificar o produto


