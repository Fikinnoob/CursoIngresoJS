/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numerouno;
    var numerodos;
  
  
  numerouno = parseInt(document.getElementById("numeroUno").value);
  numerodos = parseInt(document.getElementById("numeroDos").value);
  
  alert(numerouno + numerodos);
}

function restar()
{var numerouno;
    var numerodos;
  
  
  numerouno = parseInt(document.getElementById("numeroUno").value);
  numerodos = parseInt(document.getElementById("numeroDos").value);
  
  alert(numerouno - numerodos);
}

function multiplicar()
{ var numerouno;
    var numerodos;
  
  
  numerouno = parseInt(document.getElementById("numeroUno").value);
  numerodos = parseInt(document.getElementById("numeroDos").value);
  
  alert(numerouno * numerodos);
	
}

function dividir()
{var numerouno;
    var numerodos;
  
  
  numerouno = parseInt(document.getElementById("numeroUno").value);
  numerodos = parseInt(document.getElementById("numeroDos").value);
  
  alert(numerouno / numerodos);
}

