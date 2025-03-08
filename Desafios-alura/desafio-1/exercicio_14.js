 //Vamos fazer um código de soma básica!
 //Defini duas variaveis para receber um numero, e com o parseInt eu "expliquei" ao codigo que era um numero
let numero1 = parseInt(prompt("Diga um número")); //Com o "prompt", vai aparecer um campo para o usuario preencher, definindo o primeiro numero.
let numero2 = parseInt(prompt("Diga outro número")); //Outra variavel para o usuario responder com outro número
//Nota: Se não colocar o parseInt, o codigo faz a junção dos numeros em vez de fazer a soma (ex:2+2=22)
let soma = numero1+numero2; // Outra variavel, que vai fazer a soma dos valores solicidados
   
//Abaixo irá aparecer um alerta, usando um metodo de concatenação, irá aparecer os valores escolhidos e a soma entre eles.
   alert(`A soma de ${numero1} + ${numero2} é igual a ${soma}`);
