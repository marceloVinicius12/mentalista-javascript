
///o parse inte gera um numero inteiro e o math ramdom faz ser aleatorio a multiplicação por 10 é para que seja da primeira casa 
let NumeroSecreto = parseInt(Math.random() * 10);
//total de tentativas para acertar
let tentativas = 3;
//while seria os laços de repetição 
while (tentativas > 0) {
    //parseint significa numeros interos e prompt é a mensagem que aparece na tela
    let chute = parseInt(prompt("digite um numero entre 0 e 10"));
    if (chute == NumeroSecreto) {
    
        alert("Parebens, voce acertou!");
        //break é para se acertar o codigo parar
       break;
       // se o numero secreto for maior que o digitado pelo usuario aparece a mensagem notificando
    }else if(NumeroSecreto > chute){
        alert("o numero secreto é maior que o chute");
        tentativas = tentativas - 1;
        // se for menor a opção aparece como menor 
    }else if(NumeroSecreto < chute){
        alert("o numero secreto é menor que o chute");
        tentativas = tentativas - 1;
    }
    }