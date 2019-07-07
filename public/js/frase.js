$('#botao-frase').click(fraseAleatoria);

function fraseAleatoria(){
    $.get("http://localhost:3000/frases", trocaFraseAleatoria);
}

function trocaFraseAleatoria(data){
    var frase = $('.frase');
    var numeroAleatorio = Math.floor(Matg.random() * data.length);

    frase.text(data[numeroAleatorio].text);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}