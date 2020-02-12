function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var random;
random = Math.round(Math.random(1)*10);
if(random >8){
	alert(random  +  " Excelente")
} else if(random >=4 && random <8){
	alert(random  +  " Aprobo")
} else if(random <4){
	alert(random  +  " Vamos, la proxima se puede")
}

}//FIN DE LA FUNCIÓN