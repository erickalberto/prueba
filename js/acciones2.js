//JavaScript
	
$(document).ready(function(e){
	$('#principal2'). height($('#page2').height());//calcular el alto de la pantalla del dispositivo 	
	document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('gorila','audio/selva/gorila.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('pajaros','audio/selva/pajaros.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('hiena','audio/selva/hiena.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('jaguar','audio/selva/jaguar.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('elefante','audio/selva/elefante.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('leon','audio/selva/leon.mp3',function(){},function(e){alert('Error '+e);});
		//REPRODUCIR LAS NOTAS
		
		$('.animalin').bind('touchstart',function(){$(this).addClass('tocada');audio.play($(this).attr('id'));});
		
		$('.animalin').bind('touchend',function(){$(this).removeClass('tocada');});
		
   
	
	},false); //deviceready
});//ready