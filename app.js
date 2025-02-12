console.log (parseInt(Math.random()*1000+1))
let nota = parseInt(prompt ('Qual a nota do aluno?'))
if (nota >= 7){
    console.log ('Aprovado')
}else{
    console.log ('Reprovado')
}
numb = 1
while (numb <11){
    console.log(numb++)
}
let numero = parseInt (prompt('Digite um número positivo ou negativo'));
if (numero >0){
    alert('O número é positivo.')
}else{
    alert('O número é negativo.')
};
let idade = parseInt (prompt('Qual a sua idade?'))
if (idade >= 18){
    alert('Você é maior de idade e pode dirigir')
} else {
    alert('Você é menor de idade.')
}
let valor1 = parseInt (prompt ('Digite um numero para comecar a operação?'));
let valor2 = parseInt (prompt (`Digite um segundo numero para subitração?`));
let resultado = (valor1-valor2);
console.log (`${resultado}`);