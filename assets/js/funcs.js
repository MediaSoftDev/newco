$(function(){
    smmothScroll(800)
})

function smmothScroll(duration) {
	$('a[href^="#"]').on('click', function(e) {
		var target=$($(this).attr('href'));
		if(target.length) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}

$(window).scroll(function(){
	superScrollTopButton()
})

function superScrollTopButton(){
	if($(document).scrollTop()>50) {
		$('#btnTop a').addClass('super-btn-top');
	}else {
		$('#btnTop a').removeClass('super-btn-top');
	}
}