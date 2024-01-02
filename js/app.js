function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'inferior'){
        comprarInferior(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert("Quantidade indisponível para tipo pista");
    } else if(qtd < 0) {
        alert('Formato não aceito');
    } else if (qtd <= qtdPista){
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra Realizada com Sucesso');
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert("Quantidade indisponível para tipo Inferior");
    } else if(qtd < 0) {
        alert('Formato não aceito');
    } else if (qtd <= qtdInferior) {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra Realizada com Sucesso');
    }
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert("Quantidade indisponível para tipo Superior");
    } else if(qtd < 0) {
        alert('Formato não aceito');
    } else if (qtd <= qtdSuperior) {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra Realizada com Sucesso');
    }
}

