$('.carousel').carousel({
  interval: 5000
});

$(document).ready(function(){
	$('.menu-bar').click(function(){
		$('.main-menu ul').slideToggle();

	});

$('.owl-carousel').owlCarousel({
  'items'	: 1,
  'autoplay':true,
  'autoplayTimeout':5000,
  'loop':true,
	});

$('.portfolio').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
});



});


