function mostrar()
{

	var contador=0;
	var acumulador=0;
    var respuesta=true;

while(respuesta == true){
	contador++;

	var numero = prompt("Ingrese un numero");

    numero = parseInt(numero);

	while(isNaN(numero)){
		numero = prompt("Error.Ingrese un numero");
		numero = parseInt(numero);
		
	}
	acumulador +=numero;
	document.getElementById("suma").value=acumulador;
	document.getElementById("promedio").value=acumulador/contador;
	respuesta = confirm("Desea ingresar otro numero?")
}



    



}//FIN DE LA FUNCIÓN