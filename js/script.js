// JavaScript Document
function mostrarMensaje1(){
	alert('Alerta desde el archivo JS externo');
}

function retornarFecha()
{
	var fecha
	fecha=new Date();
	var cadena=fecha.getDate()+'/'+(fecha.getMonth()+1)+'/'+fecha.getFullYear();
	return cadena;
}

function retornarHora()
{
	var fecha
	fecha=new Date();
	var cadena=fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds();
	return cadena;
}

function fechahora(){
	var cadena = "La fecha de hoy es: "+ retornarFecha()+ "----- Hora: "+ retornarHora();
	document.formulario.horafecha.value =(cadena);
	return cadena;
}
$(document).ready(function() {
    $("#mayoria_edad").click (function(evento){
		if ($("#mayoria_edad").prop('checked')){
			$("#formulariomayores").css("display","block");
		}else{
			$("#formulariomayores").css("display","none");
		}
	});
	$("#clickparrafo").click(function(){
		$("#clickparrafo").css("background","blue");
	});
});
