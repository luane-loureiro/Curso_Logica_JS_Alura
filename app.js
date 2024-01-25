let titulo = document.querySelector('h1');
titulo.innerHTML =`Hora do Desafio`;

function msgConsole(){
    console.log('o botão foi clicado')
};
function msgAlert(){
    alert('Eu amo Java Script')
};
function msgPrompt(){
    let cidade = prompt(`Escreva o nome de uma Cidade`);
    alert(`eu estive em ${cidade} e lembrei de Você`);
};
let numero1 = 0;
let numero2 = 0;
let numero3 = 0;

function umNumero(){
    numero1 = parseInt(prompt(`Escreva um Número: `));
}
function segundoNumero(){
    numero2 = parseInt (prompt(`Escreva o Segundo Número: `));
}
function terceiroNumero(){
    numero3 = parseInt (prompt(`Escreva o Terceiro Número: `));
}

function msgSoma(){
    umNumero();
    segundoNumero();
    alert(`A soma de ${numero1} e ${numero2} é: ` + (numero1 + numero2));
}

function msgOla(){
    alert('Olá Mundo!');
};

function msgOlaNome(){
    let nome = prompt('Qual é o seu nome? ');
    alert(`Olá ${nome}`)
}

function msgDobro(){
    umNumero();
    alert(`O dobro de ${numero1} é ` + (numero1 * 2));
}

function msgMedia(){
    umNumero();
    segundoNumero();
    terceiroNumero();
    alert(`A media entre ${numero1}, ${numero2} e ${numero3}  é  ` + (numero1 + numero2 + numero3)/ 2)
}

function msgMaior(){
    umNumero();
    segundoNumero();
    let maior = 1
    if (numero1 == numero2) {
            alert('os números são iguais.')
        }
        else {
            if (numero1 > numero2){
            maior = numero1;
            }
            else {
            maior = numero2;
            }

    alert(`Entre ${numero1} e ${numero2}, o maior é ` + maior);
}}

function msgQuadrado() { 
    umNumero();
    alert(`O quadrado de ${numero1}  é ` + (numero1*numero1));

}