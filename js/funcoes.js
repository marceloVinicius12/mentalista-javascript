//caso se digite este numero estaria correto
let NumeroSecreto = 7;
let tentativas = 3;
//while seria os laços de repetição 
while (tentativas > 0) {
    //parseint significa numeros interos e prompt é a mensagem que aparece na tela
    let chute = parseInt(prompt("digite um numero entre 0 e 10"));
    if (chute == NumeroSecreto) {
    
        alert("Parebens, voce acertou!");
        //break é para se acertar o codigo parar
       break;
    }else if(NumeroSecreto > chute){
        alert("o numero secreto é maior que o chute");
        tentativas = tentativas - 1;
    }else if(NumeroSecreto < chute){
        alert("o numero secreto é menor que o chute");
        tentativas = tentativas - 1;
    }
    }