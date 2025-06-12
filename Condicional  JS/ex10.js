//10. Verifique se o ano é bissexto
//let ano = 2024;

let ano = 2024;

if ((ano % 400 == 0) || (ano %4 ==0 && ano % 100!=0)){
    
    console.log("Este ano é considerado bissexto");
}else{
    console.log("Não é um ano bissexto")
}


