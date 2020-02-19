function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
    var maximo;
	var minimo;
	var primeraVez = true;

	while(respuesta!='no')

	{ var numero = prompt("Ingrese un numero");
	      numero = parseInt(numero);

		while(isNaN(numero)){
		numero = prompt("Error.Ingrese un numero");
		numero = parseInt(numero); }

			  //Bandera primeraVez 
		  }if(primeraVez){
			  primeraVez = false;

			  maximo =numero;
			  minimo= numero;

		  }else if (numero > maximo){
			  maximo = numero;

		  }else if(numero < minimo){
			  minimo = numero;

             respuesta = confirm("Desea continuar?");
		  }
		

document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;
 
	
	




}//FIN DE LA FUNCIÓN