function mostrar()
{var marca;
 var peso;
 var temperatura;
 var temperaturaspares=0;
 var temperaturasbajocero=0;


 while(confirm("Desea Ingresar Datos?")){
  marca = prompt("Ingrese la marca del producto");

  peso = parseInt(prompt("Ingrese el peso del producto 1 - 100"));
  
  while(isNaN(peso)){
       peso = prompt("Error ingrese un peso valido.")
       peso = parseInt(prompt("Ingrese el peso del producto 1 - 100"));

   }temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento -30 - 30")); 

   while(isNaN(temperatura)){
    temperatura = prompt("Error ingrese una temperatura valida.")
    temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento -30 - 30"));
   }
    while(confirm("Desea Ingresar mas datos ?")){
        marca = prompt("Ingrese la marca del producto");
        peso = parseInt(prompt("Ingrese el peso del producto 1 - 100"));
        temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento -30 - 30"));
  }
   if(temperatura % 2 ==0){
       temperaturaspares++;
       
   }if(temperatura 


}
}