function mostrar()
{
var contador = 0;
var clave = prompt("ingrese el número clave.");
 while (clave != "utn750"){
 clave = prompt("ingrese su clave")

 contador++;

 if(contador== 1){
     alert("Error.Numero de Intentos Maximos Alcanzados")

 break;
}
if(clave == "utn750"){
    alert("Bienvenido")

}
}
}//FIN DE LA FUNCIÓN
