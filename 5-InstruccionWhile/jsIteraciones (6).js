function mostrar()
{

	var contador=0;
	var acumulador=0;
while(contador <5){
	contador++;
	acumulador= acumulador + contador;
}


document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/5;

}//FIN DE LA FUNCIÓN