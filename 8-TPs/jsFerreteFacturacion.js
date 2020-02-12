/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
 var precioDos;
 var precioTres;
 var resultado; 

 precioUno = parseInt(document.getElementById("PrecioUno").value);
 precioDos = parseInt(document.getElementById("PrecioDos").value);
 precioTres = parseInt(document.getElementById("PrecioTres").value);

 resultado = (precioUno + precioDos + precioTres);

 alert(resultado);
	
}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultadoSuma;
    var cantidadVariables;
    var promedio;

   
   
    precioUno = parseFloat(document.getElementById("PrecioUno").value);
    precioDos = parseFloat(document.getElementById("PrecioDos").value);
    precioTres = parseFloat(document.getElementById("PrecioTres").value);
   
    resultadoSuma = (precioUno + precioDos + precioTres);
    cantidadVariables = 3;
    promedio = resultadoSuma / cantidadVariables;
    
    alert(promedio);
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var totalValor;
    var IvaDelTotal;
    var totalValorConIva;


   
   
    precioUno = parseFloat(document.getElementById("PrecioUno").value);
    precioDos = parseFloat(document.getElementById("PrecioDos").value);
    precioTres = parseFloat(document.getElementById("PrecioTres").value);

    totalValor = (precioUno + precioDos + precioTres);

    IvaDelTotal = totalValor *21 /100;

    totalValorConIva = IvaDelTotal + totalValor;

    alert(totalValorConIva);


   
	
}