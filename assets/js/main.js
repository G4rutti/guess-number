var NumQualquer = Math.floor(Math.random() * 101)
var numTentativas = 0
var ganhador = false
console.log(NumQualquer)
function Chute(){
    var input = document.getElementById('guess')
    var erro = document.getElementById('erro')
    var maiorMenor = document.getElementById('maiorMenor')
    var tentativas = document.getElementById('tentativas')
    var btnReiniciar = document.getElementById('reiniciar')
    var rodape = document.getElementById('rodape')
    var valorInput = input.value
    var inputString = valorInput.toString()
    
    if(ganhador === true){
    }else{
        if(input.value == ''){
            erro.innerHTML = "Não pode colocar numero vazio ou caracteres especiais"
        }else if(input.value > 100){
            erro.innerHTML = "Não pode colocar um valor maior que 100"
        }else{
            if(input.value < NumQualquer){
                maiorMenor.innerHTML = "O numero é maior que " + input.value + "" 
                numTentativas++
                tentativas.innerHTML = "Tentativas: " + numTentativas + ""
                input.value = ''
                erro.innerHTML = ""

                
            }else if(input.value > NumQualquer){
                maiorMenor.innerHTML = "O numero é menor que " + input.value + "" 
                numTentativas++
                tentativas.innerHTML = "Tentativas: " + numTentativas + ""
                input.value = ''
                erro.innerHTML = ""

            }else if(input.value == NumQualquer){
                rodape.style.transition = '0.5s'
                rodape.style.backgroundColor = '#00F5A0'
                maiorMenor.innerHTML = "Parabens, Você Ganhou!" 
                input.value = ''
                erro.innerHTML = ""
                btnReiniciar.style.display = 'flex'
                ganhador = true
            }
        }
    }
}

function reiniciar(){
    document.location.reload(true);
}
