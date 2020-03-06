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
 var datos ='Ingrese Datos';

 while(confirm(datos)){
  datos='Desea Ingresar mas datos ?'
  marca = prompt("Ingrese la marca del producto");
  flag++;
  peso = parseInt(prompt("Ingrese el peso del producto 1 a 100"));
  
       
     while(peso >100 || peso <1 ||isNaN(peso)){
        peso = parseInt(prompt("Error ingrese un peso valido 1 a 100."));

       }if(flag == 1 || peso >productopesado){
        productopesado = peso;
        marcapesada = marca;
       
   }if(flag == 1 || peso > pesomax ){
       pesomax = peso;


   }if(flag == 1 ||peso < pesomin ){
       pesomin = peso;
   }
   promedios++;
   acumuladorpeso = acumuladorpeso + peso;
   promediospeso =  acumuladorpeso / promedios;


   temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento -30 a 30")); 

    
    while(temperatura <=-31 || temperatura >=31 || isNaN(temperatura)){
        temperatura = parseInt(prompt("Error ingrese una temperatura valida -30 a 30."));
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
document.write("(D): "+ "Promedio de peso de todos los productos  " + promediospeso +" kg" +"</br>")
document.write("(E): "+ "El peso maximo es  " + pesomax +" kg" + " El precio minimo es " + pesomin +" kg"+  "</br>")
}