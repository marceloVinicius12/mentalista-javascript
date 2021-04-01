let NumeroSecreto = 7;

let tentativas = 3;

while (tentativas > 0) {
    let chute = parseInt(prompt("digite um numero entre 0 e 10"));
    if (chute == NumeroSecreto) {
    
        alert("Parebens, voce acertou!");
        break;
    } else {
        alert("que pena, tente de novo");
        tentativas = tentativas - 1;
    }
}