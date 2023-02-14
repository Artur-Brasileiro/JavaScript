function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('iIdade')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] - Verifique os dados e tente novamente!')
    } else {
        var nas = Number(fano.value)   
        var idade = ano - nas
        var genero = ''
        var gen = window.document.getElementsByName('sexo')
        if(gen[1].checked){
            genero = 'homem'
        }else if(gen[2].checked){
            genero = 'mulher'
        }
        res.innerHTML = `Tem ${idade} anos!`
    }
}