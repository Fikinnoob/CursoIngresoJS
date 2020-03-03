function mostrar()
{var numero;


    numero = parseInt(prompt("Ingrese un numero."));

    for(var i=2; i <=numero ;i++){
     
        if(numero % i ==0 && numero !=2){

            alert("el numero ingresado no es primo");
            break;
        }if(numero % i ==1 || numero ==3)
        alert("el numero ingresado es primo");
        break;

    }
if(numero <=1){
    alert("el numero ingresado no es primo");
}
if(numero==2){
    alert("el numero ingresado es primo");

}
}



//FIN DE LA FUNCIÓN