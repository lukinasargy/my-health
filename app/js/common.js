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

$('.order__btn').on('click', function(event, mail) {
			event.preventDefault();
			ValidateEmail(document.emailForm.emailFormInput);
		});

		function ValidateEmail(inputText) {
			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if (inputText.value.match(mailformat)) {
				document.emailForm.emailFormInput.focus();
				$(".order__info").removeClass('order__info--invalid').addClass('order__info--valid').fadeIn(300).html('Письмо отправлено на вашу почту');
				return true;
			} else {
				document.emailForm.emailFormInput.focus();
				$(".order__info").removeClass('order__info--valid').addClass('order__info--invalid').fadeIn(300).html('Вы ввели неправильный e-mail адрес');
				return false;
			}
		}
});
