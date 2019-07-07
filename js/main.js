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