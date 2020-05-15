$(function(){


$('.c__slider__buttons__wrapper ').slick({
	
	prevArrow: '<button type="button" class="slick__button slick-prev"></button>',
	nextArrow: '<button type="button" class="slick__button slick-next"></button>',
infinite: false

	}); 

$('select').styler();


$('.c__news__button__wrapper ').slick({
	
	prevArrow: '<button type="button" class="slick__button__news slick-prev"></button>',
	nextArrow: '<button type="button" class="slick__button__news slick-next"></button>',
infinite: false

	}); 


 $('select').styler();


$('.header__menu__button').on('click', function(){
	$('.header__menu ul').slideToggle();
})



	});
