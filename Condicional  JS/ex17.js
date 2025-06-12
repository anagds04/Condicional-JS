//17. Calcule bônus de salário
//let salario = 2000;
//let cargo = "gerente";

let salario = 2000;
let cargo = "gerente";
let bonus = 0;

if(cargo === "atendente"){
    bonus = salario * 0.15;

}else if (cargo === "gerente"){
    bonus = salario * 0.20;
    
}else{
    bonus = salario * 0.05;

}
console.log(`O bonus do salario da ${cargo} é de ${bonus}`)