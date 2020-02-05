/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var numero1;
var numero2;
var diez;
var cien;
var resultado;

parseInt(diez = 10);
parseInt(cien = 100);


numero1 = parseInt(document.getElementById("sueldo").value);
resultado = numero1 *diez /cien +numero1;
numero2 = resultado;
document.getElementById("resultado").value = numero2;
	
}
