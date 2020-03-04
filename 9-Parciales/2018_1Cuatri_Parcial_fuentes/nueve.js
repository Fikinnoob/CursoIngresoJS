function mostrar()
{var marca;
 var peso;
 var temperatura;
 var temperaturaspares=0;
 var productopesado;
 var marcapesada;
 var flag=0;
 var cerogrados=0;
 var promedios=0;
 var acumuladorpeso=0;
 var pesomin;
 var pesomax;
 var promediospeso;

 while(confirm("Desea ingresar Datos?")){
  marca = prompt("Ingrese la marca del producto");
  flag++;
  peso = parseInt(prompt("Ingrese el peso del producto 1 - 100"));
  promedios++;
  while(isNaN(peso)){
       peso = prompt("Error ingrese un peso valido.")
       peso = parseInt(prompt("Ingrese el peso del producto 1 - 100"));
       promedios++;
    } if(peso >100 || peso <1){
        peso = prompt("Error ingrese un peso valido.")
    

       }if(flag == 1 || peso >productopesado){
        productopesado = peso;
        marcapesada = marca;
       
   }if(flag == 1 || peso > pesomax ){
       pesomax = peso;


   }if(flag == 1 ||peso < pesomin ){
       pesomin = peso;
   }
   acumuladorpeso = acumuladorpeso + peso;
   promediospeso =  acumuladorpeso / promedios;

   temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento -30 - 30")); 

   while(isNaN(temperatura)){
    temperatura = prompt("Error ingrese una temperatura valida.")
    temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento -30 - 30"));
   }
    if(temperatura <=-31 || temperatura >=31){
     temperatura = prompt("Error ingrese una temperatura valida.")
    }
      if(temperatura % 2 == 0){
      temperaturaspares++;

   } if(temperatura <=0){
       cerogrados++;

   }
 


 }
document.write("(A): "+ "la cantidad de temperaturas pares son " + temperaturaspares + "</br>")
document.write("(B): "+ "la marca del producto mas pesado es " + marcapesada + "</br>")
document.write("(C): "+ "cantidad de productos que se conservan bajo cero son  " + cerogrados + "</br>")
document.write("(D): "+ "Promedio de peso de todos los productos  " + promediospeso + "</br>")
document.write("(E): "+ "El peso maximo es  " + pesomax + " El precio minimo es " + pesomin + "</br>")
}