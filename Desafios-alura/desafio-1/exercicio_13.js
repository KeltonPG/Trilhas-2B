// Area do circulo = π·r²
 let pi = Math.PI
 let raio = prompt("Qual o valor do raio?");
 calculo();

 function calculo(){
    let raioQuadrado = raio*raio;
    let valor = parseInt(pi*raioQuadrado);
    alert(`A área do circulo é aproximadamente ${valor}.`);
    
 }
