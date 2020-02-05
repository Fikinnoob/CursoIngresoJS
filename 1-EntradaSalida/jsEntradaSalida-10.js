/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{var numero1;
    var numero2;
    var porcentaje;
    var resultado;
    var cien;
    var segundo;

    parseInt(cien = 100);
    parseInt(porcentaje = 25);
    numero1 = parseInt(document.getElementById("importe").value);
    resultado = numero1 *porcentaje /cien;
    segundo = numero1 - resultado;
    numero2 = segundo;
    document.getElementById("resultado").value = numero2;

	
}
