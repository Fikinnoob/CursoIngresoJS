function mostrar()
{var nombre;
 var cantidadpersonas;
 var cantidaddias;
 var formadepago;
 var huespedsolo;
 var flagdia=0;
 var diamax=0;
 var personasmax=0;
 var contefectivo=0;
 var conttarjeta=0;
 var contqr=0;
 var contadorreserva=0;
 var sumadias=0;
 var diasyreseva;
 var diasmax=0;

 diasyreseva =parseInt(diasyreseva);
 while(confirm("Desea Ingresar Datos")){ 
    
    nombre = prompt("Nombre del huesped");

    cantidadpersonas = parseInt(prompt("Ingrese la cantidad de personas"));
   while (isNaN(cantidadpersonas)){
    cantidadpersonas = parseInt(prompt("Error.Ingrese la cantidad de personas"));
   }

   
   cantidaddias = parseInt(prompt("Ingrese la cantidad de dias de estadia"));
   while (isNaN(cantidaddias)){

    cantidaddias = parseInt(prompt("Error.Ingrese la cantidad de dias de estadia"));


}if(flagdia==0 || cantidaddias > diamax){
   diamax = cantidaddias;
   personasmax = cantidadpersonas;
   flagdia++;
}sumadias = sumadias + cantidaddias;



    formadepago = prompt("Ingrese la forma de pago");
    while(!(formadepago == "efectivo"||formadepago == "tarjeta" || formadepago == "QR")){
       formadepago =  prompt("Error. Ingrese la forma de pago")
      
   
    }if(formadepago == "efectivo"){
       contefectivo++;
    }else if(formadepago == "tarjeta"){
       conttarjeta++;
    }else if(formadepago == "QR"){
       contqr++;

    }contadorreserva++;
    
    diasyreseva =sumadias / contadorreserva;

   if(contadorreserva == 1 || cantidadpersonas > diasmax ){
      huespedsolo = nombre;
      diasmax = cantidadpersonas;
   }
   } 
document.write("(A)" + "El huesped que trajo mas personas en una sola reserva: " +  huespedsolo +  "</br>")
document.write("(B)" + "La cantidad de  personas que se quedaron mas dias: "  +  personasmax +  "</br>")
if( contqr > conttarjeta && contqr > contefectivo){
   document.write("(C)" + "La forma de pago mas utilizada es " + " QR  " + " </br>");
  // QR va a ser utilizado mas veces.

}if( conttarjeta > contqr && conttarjeta > contefectivo){
  document.write("(C)" + "La forma de pago mas utilizada es: " + " Tarjeta  " + " </br>");
 // QR va a ser utilizado mas veces.

}if( contefectivo > conttarjeta && contefectivo > contqr){
  document.write("(C)" + "La forma de pago mas utilizada es: " + " Efectivo  " + " </br>");
 // QR va a ser utilizado mas veces.
}

document.write("(D)" + "El promedio de dias por reserva es: "  +  diasyreseva +  "</br>")

}