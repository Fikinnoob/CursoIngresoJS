function mostrar()
{var numero;
    var pares=0;

    numero = parseInt(prompt("Ingrese un numero."));

    for(var i=1 ; i <= numero; i++ ){

        if(i % 2 == 0){
            console.log(i);
            pares++;
        }
    }
  console.log("pares encontrados " + pares );


}//FIN DE LA FUNCIÓN