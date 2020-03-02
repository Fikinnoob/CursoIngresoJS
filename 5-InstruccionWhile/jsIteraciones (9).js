function mostrar()
{

	// declarar variables
	var contador=0;
	var respuesta="si";
    var maximo;
	var minimo;
	var primeravez = true;

	while(confirm("desea ingresar un numero"))

	{ var numero = prompt("Ingrese un numero");
	      numero = parseInt(numero);

		while(isNaN(numero)){
		numero = prompt("Error.Ingrese un numero");
		numero = parseInt(numero); 
	   contador++;
	}

			  //Bandera primeraVez 
		if(primeravez){
			  primeravez = false;

			  maximo =numero;
			  minimo= numero;

		  }else if (numero > maximo){
			  maximo = numero;

		  }else if(numero < minimo){
			  minimo = numero;

            
		  }
		  document.getElementById("maximo").value = maximo;
           document.getElementById("minimo").value = minimo;
		}
		}

	
	




//FIN DE LA FUNCIÓN