function getValorAPagarBruto() {     


    var valorDoSalario = document.getElementById('valorDoSalario').value;
    var fatorDeConversao = document.getElementById('fatorDeConversao').value;
    var d3Bruto = ((valorDoSalario * fatorDeConversao) / 12);
    var d3INSS = (d3Bruto * 0.08);
    var d3AReceber = (d3Bruto - (d3Bruto * 0.08));
      
   document.getElementById("mostrarValorDePagamentoBruto").innerHTML = d3Bruto + ' Valor Bruto';
   document.getElementById("mostrarValorDePagamentoINSS").innerHTML = d3INSS + ' Valor do INSS';
   document.getElementById("mostrarValorDePagamentoReceber").innerHTML = d3AReceber + ' Valor Receber';
  
  }