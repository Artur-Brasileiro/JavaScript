function gerar(){
    var num = window.document.getElementById('num')
    var valor_num = Number(num.value)

    var res = window.document.getElementById('res')
    var resposta = ''
    var c = 0

    document.getElementById('res').style.display = 'inline-block'

    while (c <= 10){
        var calc = valor_num * c
        resposta += `${valor_num} x ${c} = ${calc}<br>`
        c++
        res.innerHTML = `${resposta}`
    }
}