alert("hola bienvenido");
let numero1;
let numero2;
let numero3;
numero1 = prompt('ingrese primer numero'); 
numero2 = prompt('ingrese segundo numero');
numero3 = prompt('ingrese tercer numero');

numero1=parseInt(numero1);
numero2=parseInt(numero2);
numero3=parseInt(numero3);

if (numero1>numero2 && numero2>numero3) {
    console.log(numero3,numero2,numero1)
    console.log(numero1,numero2,numero3)
} else if(numero2>numero1 && numero1>numero3){
    console.log(numero3,numero1,numero2)
    console.log(numero2,numero1,numero3)
} else(numero3>numero1 && numero1>numero2)
console.log(numero2,numero1,numero3)
console.log(numero3,numero1,numero2)


