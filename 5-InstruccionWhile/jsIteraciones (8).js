function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;

	while(confirm("desea ingresar un numero")){
    var numero = prompt("Ingrese un numero");

    numero = parseInt(numero);
    
	
	 
	while(isNaN(numero)){
		numero = prompt("Error.Ingrese un numero");
		numero = parseInt(numero); 

		contador++;

     if(contador >= 2){
		 alert("error. capacidad maxima de error");
		 break;
		}
	
	}
	
	if(numero >= 0){
		 positivo = positivo + numero;
	}else if(numero <0){
     negativo *= numero;
	
 }
	
}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN