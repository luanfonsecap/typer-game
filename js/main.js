var tempoInicial = $("#tempo-digitacao").text();
var campo = $('.campo-digitacao')

$(
    atualizaTamanhoFrase(),
    inicializaContadores(),
    inicializaMarcadores()
)

function atualizaTamanhoFrase() {
    var frase = $('.frase').text()
    var numPalavras = frase.split(' ').length
    var tamanhoFrase = $('#tamanho-frase')
    
    tamanhoFrase.text(numPalavras)
}

function inicializaContadores() {       
    campo.on("input", function(){
        var conteudo = campo.val()
        var qtdPalavras = conteudo.split(/\S+/).length -1
        $('#contador-palavras').text(qtdPalavras)

        var qtdCaracteres = conteudo.length
        $('#contador-caracteres').text(qtdCaracteres)
    })
}

function inicializaMarcadores() {    
    var frase = $('.frase').text()
    campo.on("input", function(){
        var digitado = campo.val()
        var comparavel = frase.substr(0, digitado.length)

        if (digitado == comparavel){
            campo.addClass('borda-verde')
            campo.removeClass('borda-vermelha')
        } else {
            campo.addClass('borda-vermelha')
            campo.removeClass('borda-verde')
        }
    })
}

function inicializaCronometro() {
    var tempoRestante = $('#tempo-digitacao').text()
    campo.on("focus", function() {
        var cronometroID = setInterval(function() {
            tempoRestante--
            $('#tempo-digitacao').text(tempoRestante)
            if(tempoRestante < 1){
                clearInterval(cronometroID)
                finalizaJogo()
            }
        }, 1000);
    })
}

function finalizaJogo() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}

function reiniciaJogo() {
    campo.attr("disabled", false)
    campo.val('')
    $('#contador-palavras').text(0)
    $('#contador-caracteres').text(0)
    $('#contador-palavras').text(tempoInicial)
    inicializaCronometro()
    campo.toggleClass('campo-desativado')
    campo.removeClass('borda-vermelha')
    campo.removeClass('borda-verde')
}

