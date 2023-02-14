function contar(){
    var inicio = window.document.getElementById('inicio')
    var valor_inicio = Number(inicio.value)

    var fim = window.document.getElementById('fim')
    var valor_fim = Number(fim.value)

    var passo = window.document.getElementById('passo')
    var valor_passo = Number(passo.value)

    var res= window.document.getElementById('res')
    var resposta = ''

    while (valor_inicio <= valor_fim){
        resposta += valor_inicio
        res.innerHTML = `${resposta}`
        valor_inicio += valor_passo
        if (valor_inicio - valor_passo < valor_fim){
            resposta += ' - '
        }
    }
}