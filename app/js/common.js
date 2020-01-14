$(function () {

	$('.slider').slick({
					dots: true,
					arrows:false,
					slidesToShow: 1,
					autoplay: true,
					pauseOnHover:true,
					autoplaySpeed: 5000,
					adaptiveHeight: true
	});

	//scrolls
	$(".js_scroll").on("click", function (event) {
		event.preventDefault();

		var id = $(this).attr('href'),
			top = $(id).offset().top;

		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});


});
