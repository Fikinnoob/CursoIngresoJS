function mostrar()
{var nombre;
 var cantidadpersonas;
 var cantidaddias;
 var formadepago;
 var solareserva=0;
 var huespedsolo;
 

 while(confirm("Desea Ingresar Datos")){ 
    
    nombre = prompt("Nombre del huesped");

    cantidadpersonas = parseInt(prompt("Ingrese la cantidad de personas"));
   while (isNaN(cantidadpersonas)){
    cantidadpersonas = parseInt(prompt("Error.Ingrese la cantidad de personas"));
   }

   
   cantidaddias = parseInt(prompt("Ingrese la cantidad de dias de estadia"));
   while (isNaN(cantidaddias)){

    cantidaddias = parseInt(prompt("Error.Ingrese la cantidad de dias de estadia"));

 }if(cantidaddias ==1 )
  huespedsolo = nombre;
  solareserva = cantidadpersonas;


    formadepago = prompt("Ingrese la forma de pago");
    while(!(formadepago == "efectivo"||formadepago == "tarjeta" || formadepago == "QR")){
       formadepago =  prompt("Error. Ingrese la forma de pago")

    }

   
    



  }
    
}
