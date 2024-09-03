// cadastrar usuarios

async function cadastrar(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const data = {
        nome,
        email,
        senha
    }

    console.log(data);

    const response = await fetch('http://localhost:3000/usuarios/cadastrar', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();

    if (results.success) {
        console.log(results)
        alert(results.message)
    } else {
        alert(results.message)
    }
}

// cadastrar produtos

async function cadastrar_produto(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const quantidade = document.getElementById('quantidade').value;
    const preco = document.getElementById('preco').value;

    const data = {
        nome,
        quantidade,
        preco
    }

    console.log(data);

    const response = await fetch('http://localhost:3000/produto/cadastrar', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();

    if (results.success) {
        console.log(results)
        alert(results.message)
    } else {
        alert(results.message)
    }
}

// aparecer no html //

async () => {
    const listar = getElementById('produtos-catalago')

    const response = await fetch('http://localhost:3000/produto/listar')
    const result = await response.json();

    if (result.success) {
        const produtos = result.data;
        products.forEach(produtos => {
            const productDiv = document.createElement('div');
            productDiv.className = 'produtos-catalago';
            productDiv.dataset.productId = produtos.id_produtos; // Adiciona um ID único ao elemento

            productDiv.innerHTML = `
                <img src="${produtos.image_link}" alt="${produtos.produtos_nome}">
                <div class="produtos-nome">${produtos.produtos_nome}</div>
                <div class="produtos-preco">R$ ${produtos.preco}</div>
            `;

            productDiv.addEventListener('click', () => {
                window.location.href = `produtos-details.html?id=${produtos.id_produtos}`; // Redireciona para a página de detalhes com o ID do produto
            });

            productList.appendChild(productDiv);
        });
    } 
}


// editar usuarios 

async function editar(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const data = {
        nome,
        email,
        senha
    }

    console.log(data);

    const response = await fetch('http://localhost:3000/usuario/editar/:id', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();

    if (results.success) {
        console.log(results)
        alert(results.message)
    } else {
        alert(results.message)
    }
}

// deletar usuarios

async function deletar(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const data = {
        nome,
        email,
        senha
    }

    console.log(data);

    const response = await fetch('http://localhost:3000/usuario/deletar/:id', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();

    if (results.success) {
        console.log(results)
        alert(results.message)
    } else {
        alert(results.message)
    }
}