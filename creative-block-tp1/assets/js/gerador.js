function sortearOpcao(opcoes) {
    return opcoes[Math.floor(Math.random() * opcoes.length)]
}

const TEXTO_VAZIO = "Clique para sortear"
const CLASSE_VAZIO = "d-block mt-2 text-secondary"
const CLASSE_SORTEADO = "d-block mt-2 fs-5 fw-bold"
const CLASSE_BOTAO = "btn btn-light border w-100 h-100 text-start p-3"

function criarCard(parte) {
    const coluna = document.createElement("div")
    coluna.className = "col"

    const card = document.createElement("button")
    card.type = "button"
    card.className = CLASSE_BOTAO

    const nome = document.createElement("span")
    nome.className = "d-block fw-semibold"
    nome.textContent = parte.parte

    const resultado = document.createElement("span")
    resultado.className = CLASSE_VAZIO
    resultado.setAttribute("aria-live", "polite")
    resultado.textContent = TEXTO_VAZIO

    card.append(nome, resultado)
    coluna.appendChild(card)

    function sortear() {
        resultado.textContent = sortearOpcao(parte.opcoes)
        resultado.className = CLASSE_SORTEADO
    }

    function limpar() {
        resultado.textContent = TEXTO_VAZIO
        resultado.className = CLASSE_VAZIO
    }

    card.addEventListener("click", sortear)

    return { elemento: coluna, sortear: sortear, limpar: limpar }
}

function criarCardPaleta(parte) {
    const quantidade = parte.quantidade || 3
    let escolhidas = []

    const coluna = document.createElement("div")
    coluna.className = "col"

    const card = document.createElement("button")
    card.type = "button"
    card.className = CLASSE_BOTAO

    const nome = document.createElement("span")
    nome.className = "d-block fw-semibold"
    nome.textContent = parte.parte

    const faixa = document.createElement("span")
    faixa.className = "d-flex gap-2 my-2"

    const slots = []
    for (let i = 0; i < quantidade; i++) {
        const slot = document.createElement("span")
        slot.className = "col"

        const amostra = document.createElement("span")
        amostra.className = "d-block border py-4"

        const nomeCor = document.createElement("span")
        nomeCor.className = "d-block small fw-semibold"

        const hexCor = document.createElement("span")
        hexCor.className = "d-block small text-secondary"

        slot.append(amostra, nomeCor, hexCor)
        faixa.appendChild(slot)
        slots.push({ amostra: amostra, nome: nomeCor, hex: hexCor })
    }

    const dica = document.createElement("span")
    dica.className = "d-block small text-secondary"
    dica.setAttribute("aria-live", "polite")

    card.append(nome, faixa, dica)
    coluna.appendChild(card)

    function desenhar() {
        slots.forEach(function (slot, i) {
            const cor = escolhidas[i]

            if (cor) {
                slot.amostra.style.backgroundColor = cor.hex
                slot.nome.textContent = cor.nome
                slot.hex.textContent = cor.hex
            } else {
                slot.amostra.style.backgroundColor = ""
                slot.nome.textContent = "?"
                slot.hex.textContent = ""
            }
        })

        if (escolhidas.length === 0) {
            dica.textContent = "Clique para sortear a 1ª cor"
        } else if (escolhidas.length < quantidade) {
            dica.textContent = "Cor " + escolhidas.length + " de " + quantidade +
                ". Clique para sortear a próxima."
        } else {
            dica.textContent = "Paleta completa. Clique para sortear outra."
        }
    }

    function sortearProxima() {
        if (escolhidas.length >= quantidade) {
            escolhidas = []
        }

        escolhidas.push(sortearOpcao(parte.opcoes))
        desenhar()
    }

    function sortearPaletaCompleta() {
        escolhidas = []
        while (escolhidas.length < quantidade) {
            escolhidas.push(sortearOpcao(parte.opcoes))
        }
        desenhar()
    }

    function limpar() {
        escolhidas = []
        desenhar()
    }

    card.addEventListener("click", sortearProxima)
    desenhar()

    return { elemento: coluna, sortear: sortearPaletaCompleta, limpar: limpar }
}

function iniciar() {
    const categoria = document.body.dataset.categoria
    const grade = document.getElementById("grade-partes")
    const botaoTudo = document.getElementById("btn-sortear-tudo")
    const botaoLimpar = document.getElementById("btn-limpar")

    const partes = dados.geradores[categoria]

    const cards = partes.map(function (parte) {
        return parte.tipo === "paleta" ? criarCardPaleta(parte) : criarCard(parte)
    })

    cards.forEach(function (c) {
        grade.appendChild(c.elemento)
    })

    botaoTudo.addEventListener("click", function () {
        cards.forEach(function (c) { c.sortear() })
    })

    botaoLimpar.addEventListener("click", function () {
        cards.forEach(function (c) { c.limpar() })
    })
}

document.addEventListener("DOMContentLoaded", iniciar)