function mostrar()
{    var contador=0;
	 var contadorpar=0;
    var contadorcero=0;
	var contadorpositivo=0;
	var contadornegativo=0;
	var negativos=0;
	var positivos=0;
	var numero;
	var respuesta=true;
	var promedioneg=0;
	var promediopo=0;

	parseInt(promedioneg);
	parseInt(promediopo);
	
	while(confirm("desea introducir un numero?")){
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero)){
			numero = prompt("Error.Ingrese un numero");
			numero = parseInt(numero); 
		   contador++; 
		
		if(contador >= 2){
			alert("error.demasiados intentos");
			break;
		}
	}

 if(numero >0){ 
		positivos = positivos + numero;
		contadorpositivo++;
		
	}else if(numero <0){
		negativos = negativos + numero;
		contadornegativo++;

    }else if(numero === 0){
		contadorcero++;


	}if(numero % 2 == 0){
		contadorpar++;
		
	}

	promedioneg =negativos /contadornegativo;
	promediopo = positivos /contadorpositivo;



	}
	document.write("numeros positivos " ,"= " +  contadorpositivo + "</br>");
	document.write("numeros negativos " ,"= " +  contadornegativo + "</br>");
	document.write("numeros par  " ,"= " +  contadorpar + "</br>");
	document.write("ceros " ,"= " +  contadorcero + "</br>");
	document.write("suma de positivos " ,"= "  +  positivos + "</br>");
	document.write("suma de negativos " ,"= "  +  negativos + "</br>");
	document.write("promedio de positivos " ,"= "  +  promediopo + "</br>");
	document.write("promedio de negativos " ,"= "  +  promedioneg + "</br>");
	}
	
		
	
	




//FIN DE LA FUNCIÓN