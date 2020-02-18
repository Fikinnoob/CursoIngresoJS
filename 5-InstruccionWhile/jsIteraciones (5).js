function mostrar()
{

var sexo = prompt("ingrese f ó m .");
while(sexo != "f" && sexo != "m"){
    sexo = prompt("Error ingrese f ó m .")

}if(sexo == "f"){
    document.getElementById("Sexo").value = sexo;
    
}else if(sexo == "m"){
    document.getElementById("Sexo").value = sexo;
}





}//FIN DE LA FUNCIÓN