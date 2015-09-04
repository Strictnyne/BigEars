
$(document).ready(function () {
	
	$('#main-container').addClass('animated fadeIn');
	//$('#b-container').addClass('animated fadeInDown');
	$('#b-container').addClass('animated fadeInUp');
	
//	$('.main').css('visibility', 'hidden');
	
	$('.main').addClass('fade');
	setTimeout(function() {
//		$('.main').css('visibility', '');
//		$('.main').addClass('animated fadeIn');
		$('.main').addClass('fade-full');
		
		
		
//		$('.main').addClass('animated fadeIn');
	}, 500);
	
	$('#logo-image').addClass('animated fadeInDown');
	$('#b-right').addClass('animated fadeInRight');
	$('#b-left').addClass('animated fadeInLeft');
//	$('#b-right').addClass('animated fadeInUp');
//	$('#b-left').addClass('animated fadeInUp');
	$('#slider').addClass('animated fadeIn');
	
});



