function mostrar()
{
    var numero;
    var divisores=0;

    numero = parseInt(prompt("Ingrese un numero."));

    for(var i=1 ; i <= numero; i++ ){

        if(numero % 1 == 0){
            console.log(i);
            divisores++;
        }
    }
  console.log("divisores encontrados " + divisores );



}//FIN DE LA FUNCIÓN