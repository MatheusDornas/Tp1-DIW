const dados = {
    "categorias": [
        {
            "id": 1,
            "chave": "animal",
            "nome": "Animal",
            "descricao": "Misture cabeça, patas, pelagem, cores e muito mais de animais reais para criar uma criatura única.",
            "destaque": true,
            "imagemPrincipal": "assets/img/categorias/animal.png",
            "exemplo": "Cabeça de gato, corpo de tartaruga, patas de pato, cauda de esquilo e padrão de cores de zebra."
        },
        {
            "id": 2,
            "chave": "personagem",
            "nome": "Personagem",
            "descricao": "Sorteie profissão, corpo, cabelo, roupa, expressão e uma paleta de 3 cores para criar um personagem do zero.",
            "destaque": true,
            "imagemPrincipal": "assets/img/categorias/personagem.png",
            "exemplo": "Detetive alto e magro, cabelo moicano, capa e capuz, expressão desconfiada e paleta azul-marinho, rosa e bege."
        },
        {
            "id": 3,
            "chave": "cenario",
            "nome": "Cenário",
            "descricao": "Monte um cenário com local, clima, horário, elemento principal e uma paleta de 3 cores para ilustrar.",
            "destaque": false,
            "imagemPrincipal": "assets/img/categorias/cenario.png",
            "exemplo": "Um farol numa ilha tropical, ao pôr do sol, com neblina, visto de cima, em clima misterioso e paleta laranja, roxo e azul-marinho."
        }
    ],
    "fotos": [
        {
            "id": 1,
            "categoriaId": 1,
            "titulo": "Lagosta: uma das opções de cabeça",
            "imagem": "assets/img/fotos/animal-lagosta.png"
        },
        {
            "id": 2,
            "categoriaId": 1,
            "titulo": "Axolote: uma das opções de orelhas",
            "imagem": "assets/img/fotos/animal-axolote.png"
        },
        {
            "id": 3,
            "categoriaId": 1,
            "titulo": "Ornitorrinco: uma das opções de focinho",
            "imagem": "assets/img/fotos/animal-ornitorrinco.png"
        },
        {
            "id": 4,
            "categoriaId": 1,
            "titulo": "Sapo de vidro: uma das opções de padrão de cores",
            "imagem": "assets/img/fotos/animal-sapo-de-vidro.png"
        },
        {
            "id": 5,
            "categoriaId": 2,
            "titulo": "Cientista: uma das profissões",
            "imagem": "assets/img/fotos/personagem-cientista.png"
        },
        {
            "id": 6,
            "categoriaId": 2,
            "titulo": "Muito comprido: Um dos tipos de corpo",
            "imagem": "assets/img/fotos/personagem-muito-comprido.png"
        },
        {
            "id": 7,
            "categoriaId": 2,
            "titulo": "Cabelo espetado: Um dos tipos de cabelo",
            "imagem": "assets/img/fotos/personagem-cabelo-espetado.png"
        },
        {
            "id": 8,
            "categoriaId": 2,
            "titulo": "Armadura: uma das roupas",
            "imagem": "assets/img/fotos/personagem-armadura.png"
        },
        {
            "id": 9,
            "categoriaId": 3,
            "titulo": "Farol: um dos elementos principais",
            "imagem": "assets/img/fotos/cenario-farol.png"
        },
        {
            "id": 10,
            "categoriaId": 3,
            "titulo": "Floresta com neblina: local e clima",
            "imagem": "assets/img/fotos/cenario-floresta-neblina.png"
        },
        {
            "id": 11,
            "categoriaId": 3,
            "titulo": "Deserto: um dos locais",
            "imagem": "assets/img/fotos/cenario-deserto.png"
        },
        {
            "id": 12,
            "categoriaId": 3,
            "titulo": "Vila medieval: um dos locais",
            "imagem": "assets/img/fotos/cenario-vila-medieval.png"
        }
    ],
    "autor": {
        "nome": "Matheus Dornas",
        "curso": "Estudante do Instituto de Ciências Exatas e Informática - PUC Minas",
        "descricao": "Criei o Creative Block para ajudar quem está com bloqueio criativo a voltar a criar: o site sorteia partes de animais, personagens e cenários para você ilustrar. Vão ser geradas combinações que podem ser harmônicas ou bizarras, mas eu espero que isso te ajude a pensar em formas criativas de conectá-las, tirando você do bloqueio :)",
        "foto": "assets/img/autor.jpg",
        "links": [
            { "nome": "Instagram", "url": "https://www.instagram.com/mattinkedpen/" },
            { "nome": "GitHub", "url": "https://github.com/MatheusDornas" },
            { "nome": "LinkedIn", "url": "https://www.linkedin.com/in/matheus-dornas/" }
        ]
    },
    "geradores": {
        "animal": [
            {
                "parte": "Cabeça",
                "opcoes": [
                    "Cachorro",
                    "Gato",
                    "Lagosta",
                    "Coruja",
                    "Elefante",
                    "Cavalo",
                    "Coelho",
                    "Leão",
                    "Tubarão",
                    "Jacaré",
                    "Girafa",
                    "Polvo",
                    "Pato",
                    "Sapo",
                    "Rinoceronte",
                    "Tartaruga"
                ]
            },
            {
                "parte": "Focinho",
                "opcoes": [
                    "Porco",
                    "Cachorro",
                    "Elefante",
                    "Tamanduá",
                    "Pato",
                    "Tucano",
                    "Golfinho",
                    "Jacaré",
                    "Pelicano",
                    "Coelho",
                    "Ornitorrinco",
                    "Cavalo",
                    "Macaco Narigudo",
                    "Toupeira nariz de estrela"
                ]
            },
            {
                "parte": "Olhos",
                "opcoes": [
                    "Coruja",
                    "Gato",
                    "Camaleão",
                    "Sapo",
                    "Cavalo",
                    "Cabra",
                    "Aranha",
                    "Peixe",
                    "Águia",
                    "Polvo",
                    "Lêmure",
                    "Lagosta",
                    "Lagosta boxeadora"
                ]
            },
            {
                "parte": "Orelhas",
                "opcoes": [
                    "Coelho",
                    "Elefante",
                    "Morcego",
                    "Raposa",
                    "Gato",
                    "Cachorro salsicha",
                    "Urso",
                    "Rato",
                    "Burro",
                    "Axolote"
                ]
            },
            {
                "parte": "Corpo",
                "opcoes": [
                    "Tartaruga",
                    "Tesourão",
                    "Elefante",
                    "Cobra",
                    "Cavalo",
                    "Pinguim",
                    "Gorila",
                    "Sapo",
                    "Urso",
                    "Camelo",
                    "Lagarto",
                    "Porco",
                    "Peixe-boi",
                    "Cachorro salsicha",
                    "Girafa"
                ]
            },
            {
                "parte": "Patas",
                "opcoes": [
                    "Cavalo",
                    "Pato",
                    "Aranha",
                    "Avestruz",
                    "Urso",
                    "Sapo",
                    "Caranguejo",
                    "Gato",
                    "Águia",
                    "Foca",
                    "Camelo",
                    "Galinha",
                    "Lagarto",
                    "Canguru",
                    "Caranguejo yeti"
                ]
            },
            {
                "parte": "Cauda",
                "opcoes": [
                    "Esquilo",
                    "Cavalo",
                    "Escorpião",
                    "Pavão",
                    "Gato",
                    "Crocodilo",
                    "Baleia",
                    "Rato",
                    "Raposa",
                    "Macaco",
                    "Castor",
                    "Camaleão",
                    "Peixe",
                    "Lagosta boxeadora"
                ]
            },
            {
                "parte": "Pelagem",
                "opcoes": [
                    "Ovelha",
                    "Tenreque raiado das planícies",
                    "Porco-espinho",
                    "Crocodilo",
                    "Tartaruga",
                    "Pássaro",
                    "Tatu",
                    "Chinchila",
                    "Gato persa",
                    "Urso polar",
                    "Cobra",
                    "Sapo"
                ]
            },
            {
                "parte": "Padrão de cores",
                "opcoes": [
                    "Zebra",
                    "Lagosta boxeadora",
                    "Onça-pintada",
                    "Flamingo",
                    "Tigre",
                    "Panda",
                    "Peixe papagaio",
                    "Girafa",
                    "Dálmata",
                    "Peixe-palhaço",
                    "Arara-azul",
                    "Ave do paraíso soberba",
                    "Leão (dourado)",
                    "Raposa (laranja e branco)",
                    "Sapo de vidro",
                    "Vaca (manchas pretas e brancas)",
                    "Camaleão (verde variado)"
                ]
            },
            {
                "parte": "Extra",
                "opcoes": [
                    "Asas de morcego",
                    "Asas de borboleta",
                    "Asas de águia",
                    "Chifres de veado",
                    "Chifre de rinoceronte",
                    "Concha de caracol",
                    "Presas de javali",
                    "Presas de elefante",
                    "Barbatana de tubarão",
                    "Juba de leão",
                    "Ferrão de abelha",
                    "Pinças de caranguejo"
                ]
            }
        ],
        "personagem": [
            {
                "parte": "Profissão",
                "opcoes": [
                    "Cientista",
                    "Cozinheiro",
                    "Detetive",
                    "Aventureiro",
                    "Músico de rua",
                    "Mago",
                    "Piloto",
                    "Jardineiro",
                    "Ladrão",
                    "Pintor",
                    "Programador",
                    "Médico"
                ]
            },
            {
                "parte": "Corpo",
                "opcoes": [
                    "Alto e magro",
                    "Alto e forte",
                    "Alto e gordo",
                    "Baixinho e gordinho",
                    "Baixinho e forte",
                    "Baixinho e magro",
                    "Atlético",
                    "Muito comprido",
                    "Robusto",
                    "Desproporcional"
                ]
            },
            {
                "parte": "Formato do rosto",
                "opcoes": [
                    "Redondo",
                    "Quadrado",
                    "Triangular",
                    "Alongado",
                    "Em formato de coração"
                ]
            },
            {
                "parte": "Cabelo",
                "opcoes": [
                    "Careca",
                    "Cacheado e volumoso",
                    "Longo e liso",
                    "Moicano",
                    "Afro",
                    "Trancinhas",
                    "Curtinho e bagunçado",
                    "Coque no alto",
                    "Espetado"
                ]
            },
            {
                "parte": "Roupa",
                "opcoes": [
                    "Casaco comprido",
                    "Macacão",
                    "Armadura",
                    "Roupa formal",
                    "Moletom largo",
                    "Capa e capuz",
                    "Uniforme de trabalho",
                    "Fantasia estranha"
                ]
            },
            {
                "parte": "Acessório",
                "opcoes": [
                    "Óculos redondos",
                    "Chapéu enorme",
                    "Mochila gigante",
                    "Cachecol",
                    "Luvas",
                    "Colar",
                    "Tapa-olho",
                    "Binóculos"
                ]
            },
            {
                "parte": "Expressão",
                "opcoes": [
                    "Sorriso confiante",
                    "Cara de sono",
                    "Surpreso",
                    "Desconfiado",
                    "Concentrado",
                    "Gargalhando",
                    "Triste",
                    "Furioso"
                ]
            },
            {
                "parte": "Paleta de cores",
                "tipo": "paleta",
                "quantidade": 3,
                "opcoes": [
                    { "nome": "Vermelho", "hex": "#E63946" },
                    { "nome": "Laranja", "hex": "#F77F00" },
                    { "nome": "Amarelo", "hex": "#FCBF49" },
                    { "nome": "Dourado", "hex": "#D4A017" },
                    { "nome": "Verde-limão", "hex": "#A7C957" },
                    { "nome": "Verde", "hex": "#2A9D4F" },
                    { "nome": "Verde-oliva", "hex": "#6B705C" },
                    { "nome": "Verde-água", "hex": "#2A9D8F" },
                    { "nome": "Menta", "hex": "#06D6A0" },
                    { "nome": "Ciano", "hex": "#4CC9F0" },
                    { "nome": "Azul", "hex": "#1D6FDB" },
                    { "nome": "Azul-marinho", "hex": "#14213D" },
                    { "nome": "Roxo", "hex": "#7B2CBF" },
                    { "nome": "Lilás", "hex": "#C77DFF" },
                    { "nome": "Rosa", "hex": "#F72585" },
                    { "nome": "Rosa-claro", "hex": "#FFB3C6" },
                    { "nome": "Salmão", "hex": "#FF8C6B" },
                    { "nome": "Terracota", "hex": "#C8553D" },
                    { "nome": "Vinho", "hex": "#6A040F" },
                    { "nome": "Marrom", "hex": "#7F4F24" },
                    { "nome": "Bege", "hex": "#E9D8A6" },
                    { "nome": "Branco", "hex": "#FFFFFF" },
                    { "nome": "Cinza", "hex": "#8D99AE" },
                    { "nome": "Preto", "hex": "#111111" }
                ]
            }
        ],
        "cenario": [
            {
                "parte": "Local",
                "opcoes": [
                    "Floresta",
                    "Cidade grande",
                    "Deserto",
                    "Ilha tropical",
                    "Montanha nevada",
                    "Fundo do mar",
                    "Vila medieval",
                    "Estação espacial",
                    "Mercado de rua"
                ]
            },
            {
                "parte": "Clima",
                "opcoes": [
                    "Ensolarado",
                    "Chuva forte",
                    "Neblina",
                    "Tempestade",
                    "Neve caindo",
                    "Vento forte",
                    "Céu limpo e estrelado"
                ]
            },
            {
                "parte": "Horário",
                "opcoes": [
                    "Amanhecer",
                    "Meio-dia",
                    "Noite de lua vermelha",
                    "Fim de tarde",
                    "Pôr do sol",
                    "Noite de lua cheia",
                    "Eclipse",
                    "Madrugada"
                ]
            },
            {
                "parte": "Elemento principal",
                "opcoes": [
                    "Uma casa torta",
                    "Uma árvore gigante",
                    "Um castelo",
                    "Uma ponte antiga",
                    "Um farol",
                    "Um barco abandonado",
                    "Uma fogueira",
                    "Uma torre"
                ]
            },
            {
                "parte": "Fundo",
                "opcoes": [
                    "Montanhas distantes",
                    "Prédios",
                    "Mar infinito",
                    "Campo aberto",
                    "Nuvens enormes",
                    "Ruínas",
                    "Floresta densa"
                ]
            },
            {
                "parte": "Detalhe no chão",
                "opcoes": [
                    "Poças d'água",
                    "Folhas secas",
                    "Flores",
                    "Pedras e musgo",
                    "Trilhos de trem",
                    "Pegadas misteriosas",
                    "Lixo espacial"
                ]
            },
            {
                "parte": "Atmosfera",
                "opcoes": [
                    "Aconchegante",
                    "Misteriosa",
                    "Assustadora",
                    "Alegre",
                    "Melancólica"
                ]
            },
            {
                "parte": "Ponto de vista",
                "opcoes": [
                    "Visto de cima",
                    "Rente ao chão",
                    "De longe, em panorama",
                    "Dentro de uma janela",
                    "De baixo para cima"
                ]
            },
            {
                "parte": "Paleta de cores",
                "tipo": "paleta",
                "quantidade": 3,
                "opcoes": [
                    { "nome": "Vermelho", "hex": "#E63946" },
                    { "nome": "Laranja", "hex": "#F77F00" },
                    { "nome": "Amarelo", "hex": "#FCBF49" },
                    { "nome": "Dourado", "hex": "#D4A017" },
                    { "nome": "Verde-limão", "hex": "#A7C957" },
                    { "nome": "Verde", "hex": "#2A9D4F" },
                    { "nome": "Verde-oliva", "hex": "#6B705C" },
                    { "nome": "Verde-água", "hex": "#2A9D8F" },
                    { "nome": "Menta", "hex": "#06D6A0" },
                    { "nome": "Ciano", "hex": "#4CC9F0" },
                    { "nome": "Azul", "hex": "#1D6FDB" },
                    { "nome": "Azul-marinho", "hex": "#14213D" },
                    { "nome": "Roxo", "hex": "#7B2CBF" },
                    { "nome": "Lilás", "hex": "#C77DFF" },
                    { "nome": "Rosa", "hex": "#F72585" },
                    { "nome": "Rosa-claro", "hex": "#FFB3C6" },
                    { "nome": "Salmão", "hex": "#FF8C6B" },
                    { "nome": "Terracota", "hex": "#C8553D" },
                    { "nome": "Vinho", "hex": "#6A040F" },
                    { "nome": "Marrom", "hex": "#7F4F24" },
                    { "nome": "Bege", "hex": "#E9D8A6" },
                    { "nome": "Branco", "hex": "#FFFFFF" },
                    { "nome": "Cinza", "hex": "#8D99AE" },
                    { "nome": "Preto", "hex": "#111111" }
                ]
            }
        ]
    }
}


function contarCombinacoes(chave) {
    return dados.geradores[chave].reduce((total, parte) => {
        const quantidade = parte.tipo === "paleta" ? parte.opcoes.length ** parte.quantidade : parte.opcoes.length
        return total * quantidade
    }, 1)
}

function montarCarrossel() {
    const destaques = dados.categorias.filter(c => c.destaque)

    const indicadores = destaques.map((c, i) => `
        <button type="button" data-bs-target="#carrosselDestaques" data-bs-slide-to="${i}"
            class="${i === 0 ? "active" : ""}" aria-label="${c.nome}"></button>`).join("")

    const slides = destaques.map((c, i) => `
        <div class="carousel-item ${i === 0 ? "active" : ""}">
            <a href="detalhes.html?id=${c.id}">
                <img src="${c.imagemPrincipal}" class="d-block w-100" alt="${c.nome}">
            </a>
            <div class="carousel-caption">
                <h3><a href="detalhes.html?id=${c.id}" class="text-white">${c.nome}</a></h3>
                <p class="d-none d-sm-block">${c.descricao}</p>
            </div>
        </div>`).join("")

    document.getElementById("carrossel").innerHTML = `
        <div id="carrosselDestaques" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">${indicadores}</div>
            <div class="carousel-inner">${slides}</div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carrosselDestaques" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carrosselDestaques" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Próximo</span>
            </button>
        </div>`
}

function montarCards() {
    document.getElementById("cards").innerHTML = dados.categorias.map(c => `
        <div class="col">
            <div class="card h-100">
                <a href="detalhes.html?id=${c.id}">
                    <img src="${c.imagemPrincipal}" class="card-img-top" alt="${c.nome}">
                </a>
                <div class="card-body">
                    <h3 class="h5 card-title">
                        <a href="detalhes.html?id=${c.id}" >${c.nome}</a>
                    </h3>
                    <p class="card-text">${c.descricao}</p>
                </div>
                <div class="card-footer">
                    <a href="detalhes.html?id=${c.id}" class="btn btn-dark">Ver detalhes</a>
                </div>
            </div>
        </div>`).join("")
}

function montarAutor() {
    const autor = dados.autor
    const links = autor.links.map(l => `<a href="${l.url}" class="btn btn-outline-dark btn-sm me-2">${l.nome}</a>`).join("")

    document.getElementById("autor").innerHTML = `
        <div class="card">
            <div class="row g-0 align-items-center">
                <div class="col-md-3 text-center p-3">
                    <img src="${autor.foto}" class="img-fluid" alt="${autor.nome}">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h3 class="h5">${autor.nome}</h3>
                        <p class="text-secondary">${autor.curso}</p>
                        <p>${autor.descricao}</p>
                        ${links}
                    </div>
                </div>
            </div>
        </div>`
}

function montarDetalhes() {
    const id = Number(new URLSearchParams(window.location.search).get("id"))
    const categoria = dados.categorias.find(c => c.id === id)

    if (!categoria) {
        window.location.href = "index.html"
        return
    }

    const fotos = dados.fotos.filter(f => f.categoriaId === id)
    const partes = dados.geradores[categoria.chave].map(p => p.parte).join(", ")
    const combinacoes = contarCombinacoes(categoria.chave).toLocaleString("pt-BR")

    document.title = categoria.nome + " - Creative Block"

    document.getElementById("info").innerHTML = `
        <a href="index.html#categorias">&larr; Voltar</a>
        <h2 class="mt-3">${categoria.nome}</h2>
        <p class="lead">${categoria.descricao}</p>
        <ul class="list-group mb-3">
            <li class="list-group-item"><strong>Partes sorteadas:</strong> ${partes}</li>
            <li class="list-group-item"><strong>Combinações possíveis:</strong> ${combinacoes}</li>
            <li class="list-group-item"><strong>Exemplo de resultado:</strong> ${categoria.exemplo}</li>
        </ul>
        <a href="${categoria.chave}.html" class="btn btn-dark">Ir para o gerador</a>`

    document.getElementById("galeria").innerHTML = fotos.map(f => `
        <div class="col">
            <div class="card h-100">
                <img src="${f.imagem}" class="card-img-top" alt="${f.titulo}">
                <div class="card-body">
                    <h3 class="h6 card-title mb-0">${f.titulo}</h3>
                </div>
            </div>
        </div>`).join("")
}

const pagina = document.body.dataset.pagina

if (pagina === "index") {
    montarCarrossel()
    montarCards()
    montarAutor()
} else if (pagina === "detalhes") {
    montarDetalhes()
}
