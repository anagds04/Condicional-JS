// Crie 03 variáveis que correspondam a um triângulo, verifique se é um triângulo válido e depois o classifique em:
// Equilatero : todos os lados são iguais Isósceles : Dois lados iguais Escaleno: Todos os lados são diferentes. 

let ladoA = 3;
let ladoB = 2;
let ladoC = 3;

if (ladoA + ladoB > ladoC && ladoB + ladoC > ladoA && ladoC + ladoA > ladoB) {
    console.log("É  um triângulo válido")
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Equilatero : todos os lados são iguais")
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        console.log("Isósceles : Dois lados iguais");
    } else {
        console.log("Escaleno: Todos os lados são diferentes");
    }
}else {
    console.log(" Triângulo inválido ")
}


