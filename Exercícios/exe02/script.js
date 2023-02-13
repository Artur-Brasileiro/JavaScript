function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('iIdade')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] - Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].cheked){
            genero = 'homem'
        } else if (fsex[1].cheked){
            genero = 'mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}