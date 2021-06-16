
let modalQt = 1;

const sMin = (el) => {
    return document.querySelector(el);
}

const sAll = (el) => {
    return document.querySelectorAll(el);
}

produtosJson.map((item, index) => {
    let cCard = sMin('#models .container-item').cloneNode(true);

    cCard.setAttribute('data-key', index);
    cCard.querySelector('.c-card__item img').src = item.img;
    cCard.querySelector('.c-card__text .nameMarca').innerHTML = item.nome;
    cCard.querySelector('.c-card__text .description').innerHTML = item.descricao;
    cCard.querySelector('.c-card .precoAntigo').innerHTML = `R$ ${item.precoAntigo.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`;
    cCard.querySelector('.c-card .precoAtual').innerHTML = `R$ ${item.precoDesc.toLocaleString("pt-br", { style: "currency", currency: "BRL"})}`;

    cCard.querySelector('a').addEventListener("click", (e)=>{
        e.preventDefault();
        let key = e.target.closest('.container-item').getAttribute('data-key');

        sMin('.c-container img').src = produtosJson[key].img;
        sMin('.c-container2 h2').innerHTML = produtosJson[key].nome;
        sMin('.c-container2 h3').innerHTML = produtosJson[key].descricao;
        sMin('.c-container2 s').innerHTML = `${produtosJson[key].precoAntigo.toLocaleString("pt-br", { style: "currency", currency: "BRL"})}`;
        sMin('.c-container2 h5').innerHTML = `${produtosJson[key].precoDesc.toLocaleString("pt-br", { style: "currency", currency: "BRL"})}`;
        sMin('.c-container2 p').innerHTML = `Até 7x de ${(produtosJson[key].precoDesc / 7).toLocaleString("pt-br", { style: "currency", currency: "BRL"})}`;

        //console.log(produtosJson[key])

        sMin('#modalContainer').style.opacity = 0;
        sMin('#modalContainer').style.display = 'flex';
        setTimeout(()=>{
            sMin('#modalContainer').style.opacity = 1;
        }, 200);


        //console.log("clicou no tenis:")
    });

    sMin('.tenis-area').append( cCard );
});

function closeModal() {
    sMin('#modalContainer').style.opacity = 0;
    setTimeout(()=>{
        sMin('#modalContainer').style.display = 'none';
    }, 200);
}
sAll('#btnVoltar, #btnVoltarMb').forEach((item)=>{
    item.addEventListener("click", closeModal);
});