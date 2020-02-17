/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{var temp;
 var c;

    temp = parseFloat(document.getElementById("Temperatura").value);

    c = (temp - 32) * 5/9;
    alert(temp + " Farenheit son " + c + " Centigrados");



	
}

function CentigradosFahrenheit () 
{ 
    var temp;
    var c;

    temp = parseFloat(document.getElementById("Temperatura").value);
    
    c = (temp *9/5) + 32;
    alert(temp + " Centigrados son " + c + " Farenheit");
}
