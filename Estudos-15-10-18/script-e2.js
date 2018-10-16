function calculo (){

var variavelA = document.getElementById("variavelA").value;
var variavetB = document.getElementById("variavelB").value;
var soma = document.getElementById("soma");
var subtracao = document.getElementById("subtracao");
var multiplicacao = document.getElementById("multiplicacao");
var divisao = document.getElementById("divisao");

   if (soma.checked == true){
       return resultadoFinal = variavelA + variavetB;
   } else if (subtracao.checked == true){
       return resultadoFinal ==  variavelA - variavetB;
   } else if (multiplicacao.checked == true){
       return resultadoFinal == variavelA * variavetB;
   } else if (divisao.checked = true){
       return resultadoFinal == variavelA / variavetB;
   }
   
}

document.getElementById("resultado").innerHTML = resultadoFinal;

