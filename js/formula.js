let  media = document.getElementById('media')
let  med_idad = document.getElementById('med_idad')
let  varianc = document.getElementById('varianc')
let  desv_pad = document.getElementById('desv_pad')


// masculino Resgatados Residentes em SC
// >50, >40, >30, >18, <18
let dados = [31, 70, 117 , 182, 5]
let med_idade = 0
let variancia = 0
let soma_variancia = 0
let desvio_padrao = 0

media.addEventListener('click', ()=>{
    let soma = 0
    let contador = 0
    
    for(let i=0;i<dados.length;i++){
        soma += Number(dados[i])
        contador += 1
    }
    // media
    med_idade = soma / contador;

    //variância
    for(let i=0;i<dados.length;i++){
        soma_variancia += Number((dados[i]-med_idade)**2)
    }
    variancia = soma_variancia / soma
    desvio_padrao = Math.sqrt(variancia)

    console.log(soma)
    console.log(contador)
    console.log(med_idade)
    console.log(variancia)
    console.log(desvio_padrao)

    med_idad.innerHTML = 'A média é = ' + med_idade.toFixed(2)
    varianc.innerHTML = 'A variância é = ' + variancia.toFixed(2)
    desv_pad.innerHTML = 'O desvio padrão é = ' + desvio_padrao.toFixed(2)
    
})

