const botaoMostrarTudo = document.querySelector(".mostrar-tudo")
const mapear = document.querySelector(".botao-map")
const somarTudo = document.querySelector(".somar-tudo")
const filtrar = document.querySelector(".filtrar-tudo")
const list = document.querySelector(".lista")

function mostrarTudo(itensArray) {
    let li = ""

    itensArray.forEach(itens => {
        li = li + `
          <li>
            <img src=${itens.src}>
            <p>
               ${itens.name}
            </p>
            <p class="item-price">
               ${itens.price}
            </p>
        </li>
        `
    })
    list.innerHTML = li
}

function desconto() {
    const newPrice = menuOptions.map(itens => ({
        ...itens,
        price: itens.price * 0.9
    }))
    mostrarTudo(newPrice)
}

function reduzir() {
    const reducao = menuOptions.reduce((acc, value) => acc + value.price, 0)

    list.innerHTML = `
     <li>
      <p class="item-price"> valor total de todos os produtos R$: ${reducao} </p>
     </li>
    `
}

function filtrando(){
    const veganos = menuOptions.filter(vegann => vegann.vegan)

    mostrarTudo(veganos)
}

botaoMostrarTudo.addEventListener('click', () => mostrarTudo(menuOptions))
mapear.addEventListener('click', desconto)
somarTudo.addEventListener('click', reduzir)
filtrar.addEventListener('click', filtrando)