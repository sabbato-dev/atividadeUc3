// function main() {
//     let primeiroNum, segundoNum, contador;

//     primeiroNum = Number(prompt('Enter first number'));
//     segundoNum = Number(prompt('Enter second number, greater than first'));

//     for (contador = primeiroNum + 1; contador <= segundoNum - 1; contador++) {
//         if (contador % 2 === 0) {
//             alert(`${contador} - PAR`);
//         } else {
//             alert(`${contador} - IMPAR`);
//         }
//     }
//     alert("Programa Finalizado");
// }

// main();


// function main() {
//     let primeiroNum, segundoNum, contador, resultado = '';

//     primeiroNum = Number(prompt('Digite o primeiro número'));
//     segundoNum = Number(prompt('Digite o segundo número, maior do que o primeiro'));

//     for (contador = primeiroNum + 1; contador <= segundoNum - 1; contador++) {
//         if (contador % 2 === 0) {
//             resultado += `${contador} - PAR\n`;
//         } else {
//             resultado += `${contador} - IMPAR\n`;
//         }
//     }
//     alert(resultado + "\nPrograma Finalizado");
// }

// main();


function main() {
    let primeiroNum, segundoNum, contador, resultado = '';

    primeiroNum = Number(prompt('Digite o primeiro número'));
    segundoNum = Number(prompt('Digite o segundo número, maior do que o primeiro'));

    while (segundoNum <= primeiroNum) {
        if (confirm("Erro: o segundo número deve ser maior que o primeiro. Deseja reiniciar o programa?")) {
            primeiroNum = Number(prompt('Digite o primeiro número'));
            segundoNum = Number(prompt('Digite o segundo número, maior do que o primeiro'));
        } else {
            alert("Programa encerrado");
            return;
        }
    }

    for (contador = primeiroNum + 1; contador <= segundoNum - 1; contador++) {
        if (contador % 2 === 0) {
            resultado += `${contador} - PAR\n`;
        } else {
            resultado += `${contador} - IMPAR\n`;
        }
    }
    alert(resultado + "\nPrograma Finalizado");
}

main();