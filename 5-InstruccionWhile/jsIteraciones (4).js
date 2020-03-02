function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
    while(numero >=10 ){
	 numero = prompt("Ingrese un numero entre 0 y 9.")

	}while(isNaN(numero)){
		numero = prompt("Error. Ingrese un numero");

		 
	 
	 
	 
	}if(numero <=10){
	document.getElementById("Numero").value = numero
	}

}//FIN DE LA FUNCIÓN